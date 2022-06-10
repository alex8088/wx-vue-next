import type { App } from 'vue'
import components from './components'
export * from './button'
export * from './collapse'
export * from './divider'
export * from './list'

const install = (app: App, options?: Record<string, unknown>): void => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options)
  }
}

export { install }
export default { install }
