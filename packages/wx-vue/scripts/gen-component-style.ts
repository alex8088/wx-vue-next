import path from 'path'
import fs from 'fs'
import colors from 'picocolors'

function copy(src: string, dest: string, exculdes: string[]): void {
  const stat = fs.statSync(src)
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true })
    for (const file of fs.readdirSync(src)) {
      const srcFile = path.resolve(src, file)
      const destFile = path.resolve(dest, file)
      copy(srcFile, destFile, exculdes)
    }
  } else {
    if (!exculdes.includes(path.basename(src))) {
      fs.copyFileSync(src, dest)
    }
  }
}

function emptyDir(dir): void {
  for (const file of fs.readdirSync(dir)) {
    const abs = path.resolve(dir, file)
    if (fs.statSync(abs).isDirectory()) {
      emptyDir(abs)
      fs.rmdirSync(abs)
    } else {
      fs.unlinkSync(abs)
    }
  }
}

export function copyStyles(dest: string): void {
  const cwd = process.cwd()

  const styleDir = path.join(cwd, 'components/styles')
  const destDir = path.resolve(cwd, dest)

  if (fs.existsSync(destDir)) {
    emptyDir(destDir)
  }

  copy(styleDir, destDir, ['conf.json', 'weui.less'])
}

export function genStyles(options: {
  outDir: string
  target: 'es' | 'cjs'
}): void {
  const cwd = process.cwd()

  const defineComponentStyleEntry = (
    componentName: string,
    entryName: string
  ): string => {
    return path.resolve(
      cwd,
      `${options.outDir}/${componentName}/style/${entryName}.js`
    )
  }

  const ensureEntry = (entry: string): void => {
    if (fs.existsSync(entry)) {
      fs.unlinkSync(entry)
    } else {
      const dir = path.dirname(entry)
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(path.dirname(entry))
      }
    }
  }

  const stylePath = (name: string, ext: string): string => {
    return `"../../styles/lib/${name}.${ext}"`
  }

  const conf = fs.readFileSync(
    path.resolve(cwd, 'components/styles/conf.json'),
    'utf-8'
  )
  const confJson = JSON.parse(conf)

  console.log(colors.green(`generating component styles...`))

  const components = Object.keys(confJson)
  components.forEach((c) => {
    const cssList = ['base'].concat(confJson[c])

    const lessEntry = defineComponentStyleEntry(c, 'index')
    ensureEntry(lessEntry)

    const cssEntry = defineComponentStyleEntry(c, 'css')
    ensureEntry(cssEntry)

    let lessContent = ''
    let cssContent = ''

    if (options.target === 'es') {
      cssList.forEach((name) => {
        lessContent += `import ${stylePath(name, 'less')};\n`
        cssContent += `import ${stylePath(name, 'css')};\n`
      })
    } else {
      cssList.forEach((name) => {
        lessContent += `require(${stylePath(name, 'less')});\n`
        cssContent += `require(${stylePath(name, 'css')});\n`
      })
    }

    fs.writeFileSync(lessEntry, lessContent)
    fs.writeFileSync(cssEntry, cssContent)
  })

  console.log(
    colors.gray(
      `component styles for ${colors.cyan(options.target)} generated.`
    )
  )
}
