import type { App, Plugin } from 'vue'

export type WithInstallType<T> = T & Plugin

export const withInstall = <T>(component: T): T & Plugin => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c = component as any

  c.install = (app: App): void => {
    app.component(c.name, component)
  }

  return c as T & Plugin
}
