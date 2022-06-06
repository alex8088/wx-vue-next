import fs from 'fs'
import path from 'path'
import colors from 'picocolors'
import less from 'less'
import postcss from 'postcss'
import comments from 'postcss-discard-comments'
import autoprefixer from 'autoprefixer'
import { formatMessages, transform } from 'esbuild'

import { copyStyles, genStyles } from './gen-component-style'

async function compileLess(filePath: string): Promise<string> {
  const source = fs.readFileSync(filePath, { encoding: 'utf-8' })

  const { css } = await less.render(source, {
    paths: [path.dirname(filePath)],
    math: 'always'
  })

  return css
}

async function compileCss(source: string): Promise<string> {
  const { css } = await postcss([
    autoprefixer(['iOS >= 10', 'Android >= 4.1']),
    comments()
  ]).process(source, {
    from: undefined
  })

  return css
}

async function minifyCss(css: string): Promise<string> {
  const { code, warnings } = await transform(css, {
    loader: 'css',
    minify: true
  })
  if (warnings.length) {
    const msgs = await formatMessages(warnings, { kind: 'warning' })
    console.warn(
      colors.yellow(`warnings when minifying css:\n${msgs.join('\n')}`)
    )
  }
  return code
}

async function compile(): Promise<void> {
  const cwd = process.cwd()

  const lessFile = path.join(cwd, 'components/styles/weui.less')
  const cssBundleName = 'wx-vue'

  console.log(colors.green('compile style full...'))

  const code = await compileLess(lessFile)
  const css = await compileCss(code)
  fs.writeFileSync(path.join(cwd, `dist/${cssBundleName}.css`), css)

  console.log(colors.gray(`dist/${colors.cyan(`${cssBundleName}.css`)}`))

  const content = await minifyCss(code)
  fs.writeFileSync(path.join(cwd, `dist/${cssBundleName}.min.css`), content)

  console.log(colors.gray(`dist/${colors.cyan(`${cssBundleName}.min.css`)}`))

  copyStyles('lib/styles')
  copyStyles('es/styles')

  const cssLibs = fs.readdirSync(path.join(cwd, 'components/styles/lib'))

  console.log(colors.green('compile style libs...'))

  await Promise.all(
    cssLibs.map(async (cssLib) => {
      const cssBundleName = cssLib.replace('less', 'css')

      const code = await compileLess(
        path.resolve(`components/styles/lib/${cssLib}`)
      )

      const css = await compileCss(code)

      fs.writeFileSync(path.join(cwd, `lib/styles/lib/${cssBundleName}`), css)
      fs.writeFileSync(path.join(cwd, `es/styles/lib/${cssBundleName}`), css)
    })
  )

  console.log(colors.gray(`${cssLibs.length} style libs transformed.`))

  genStyles({ outDir: 'es', target: 'es' })
  genStyles({ outDir: 'lib', target: 'cjs' })
}

compile()
