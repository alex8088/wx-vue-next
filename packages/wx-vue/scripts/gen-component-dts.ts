import path from 'path'
import fs from 'fs'
import { Project, type SourceFile } from 'ts-morph'
import glob from 'glob'
import { parse, compileScript } from 'vue/compiler-sfc'
import colors from 'picocolors'

export async function genDts(options: { outDir: string }): Promise<void> {
  const root = process.cwd()

  const pro = new Project({
    compilerOptions: {
      rootDir: path.resolve(root, 'components'),
      outDir: path.resolve(root, options.outDir),
      declaration: true,
      emitDeclarationOnly: true
    },
    tsConfigFilePath: 'tsconfig.json',
    skipAddingFilesFromTsConfig: true
  })

  const files = glob.sync('components/**/*.{ts,tsx,vue}', { cwd: root })

  const sourceFiles: SourceFile[] = []

  await Promise.all(
    files.map(async (file) => {
      if (file.endsWith('.vue')) {
        const content = await fs.promises.readFile(
          path.resolve(root, file),
          'utf8'
        )
        const sfc = parse(content)
        const { script, scriptSetup } = sfc.descriptor
        if (script || scriptSetup) {
          let content = script?.content ?? ''

          if (scriptSetup) {
            const compiled = compileScript(sfc.descriptor, {
              id: 'xxx'
            })
            content += compiled.content
          }

          const lang = scriptSetup?.lang || script?.lang || 'js'
          const sourceFile = pro.createSourceFile(
            `${path.relative(root, file)}.${lang}`,
            content
          )
          sourceFiles.push(sourceFile)
        }
      } else {
        const sourceFile = pro.addSourceFileAtPath(file)
        sourceFiles.push(sourceFile)
      }
    })
  )

  console.log(colors.green(`generating type definitions...`))

  await Promise.all(
    sourceFiles.map(async (sourceFile) => {
      const diagnostics = sourceFile.getPreEmitDiagnostics()
      if (diagnostics.length > 0) {
        console.log(
          colors.red(pro.formatDiagnosticsWithColorAndContext(diagnostics))
        )
      }

      const emitOutput = sourceFile.getEmitOutput()
      const outputFiles = emitOutput.getOutputFiles()
      await Promise.all(
        outputFiles.map(async (outputFile) => {
          const filepath = outputFile.getFilePath()

          const outputDir = path.dirname(filepath)
          if (!fs.existsSync(outputDir)) {
            await fs.promises.mkdir(outputDir, {
              recursive: true
            })
          }

          await fs.promises.writeFile(filepath, outputFile.getText(), 'utf8')

          console.log(
            colors.gray(
              `definition for file: ${colors.cyan(
                path.relative(root, sourceFile.getFilePath())
              )} generated`
            )
          )
        })
      )
    })
  )
}
