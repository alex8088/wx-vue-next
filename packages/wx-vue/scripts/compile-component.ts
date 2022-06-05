import { InlineConfig, build } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import fs from 'fs'

import { genDts } from './gen-component-dts'

const externals = (): string[] => {
  const pkg = fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf-8')
  const pkgJson = JSON.parse(pkg)
  const dependencies = pkgJson.dependencies
  const peerDependencies = pkgJson.peerDependencies
  return [
    ...Object.keys(dependencies || {}),
    ...Object.keys(peerDependencies || {})
  ]
}

const config: InlineConfig = {
  plugins: [vue()],
  build: {
    minify: false,
    rollupOptions: {
      preserveEntrySignatures: 'strict',
      input: [path.resolve(process.cwd(), 'components/index.ts')],
      external: [...externals()],
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'components',
          globals: {
            vue: 'Vue'
          }
        },
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          exports: 'named',
          preserveModules: true,
          preserveModulesRoot: 'components',
          globals: {
            vue: 'Vue'
          }
        }
      ]
    }
  }
}

const getUmdConfig = (minify: boolean): InlineConfig => {
  return {
    plugins: [vue()],
    build: {
      minify,
      emptyOutDir: false,
      rollupOptions: {
        input: [path.resolve(process.cwd(), 'components/index.ts')],
        external: [...externals()],
        output: {
          format: 'umd',
          dir: 'dist',
          entryFileNames: minify ? 'wx-vue.min.js' : 'wx-vue.js',
          globals: {
            vue: 'Vue'
          }
        }
      }
    }
  }
}

async function compile(): Promise<void> {
  await build(config)
  await build(getUmdConfig(false))
  await build(getUmdConfig(true))
  await genDts({ outDir: 'es' })
  await genDts({ outDir: 'lib' })
}

compile()
