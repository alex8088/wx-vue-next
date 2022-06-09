import type { App } from 'vue'
import components from './components'
export * from './button'
export * from './collapse'

const install = (app: App, options?: Record<string, unknown>): void => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options)
  }
}

export { install }
export default { install }
