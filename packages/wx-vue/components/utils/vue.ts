import type { App, Plugin, InjectionKey, VNode, Component } from 'vue'
import { Fragment } from 'vue'

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

export const flattenChildren = (
  vnodes: VNode[] = [],
  name: string
): VNode[] => {
  const components: VNode[] = []
  vnodes.forEach((vnode) => {
    if ((vnode.type as Component).name === name) {
      components.push(vnode)
    } else if (vnode.type === Fragment) {
      components.push(...flattenChildren(vnode.children as VNode[], name))
    }
  })

  return components
}
