import type { App, Plugin, InjectionKey } from 'vue'

export type WithInstallType<T> = T & Plugin

export const withInstall = <T>(component: T): T & Plugin => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const c = component as any

  c.install = (app: App): void => {
    app.component(c.name, component)
  }

  return c as T & Plugin
}

export const createInjectionKey = <T>(
  description?: string | number
): InjectionKey<T> => {
  return Symbol(description)
}
