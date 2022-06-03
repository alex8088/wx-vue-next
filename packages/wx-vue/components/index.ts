import { App } from 'vue'
import components from './components'

const install = (app: App, options?: Record<string, unknown>): void => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options)
  }
}

export { install }

export * from './components'
export * from './plugins'

export default { install }
