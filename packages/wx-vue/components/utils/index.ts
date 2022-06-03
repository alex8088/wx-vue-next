import { App, Plugin } from 'vue'

export const withInstall = <T>(component: T): T & Plugin => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c = component as any

  c.install = (app: App): void => {
    app.component(c.name, component)
  }

  return c as T & Plugin
}
