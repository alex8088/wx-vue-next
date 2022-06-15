import type { App } from 'vue'
import components from './components'
export * from './button'
export * from './collapse'
export * from './dialog'
export * from './divider'
export * from './flex'
export * from './grid'
export * from './list'
export * from './toast'

const install = (app: App, options?: Record<string, unknown>): void => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options)
  }
}

export { install }
export default { install }

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    WxButton: typeof import('./button')['WxButton']
    WxCollapse: typeof import('./collapse')['WxCollapse']
    WxCollapseItem: typeof import('./collapse')['WxCollapseItem']
    WxDialog: typeof import('./dialog')['WxDialog']
    WxDivider: typeof import('./divider')['WxDivider']
    WxFlex: typeof import('./flex')['WxFlex']
    WxFlexItem: typeof import('./flex')['WxFlexItem']
    WxGrid: typeof import('./grid')['WxGrid']
    WxGridItem: typeof import('./grid')['WxGridItem']
    WxList: typeof import('./list')['WxList']
    WxListItem: typeof import('./list')['WxListItem']
  }

  interface ComponentCustomProperties {
    $toast: typeof import('./toast')['WxToast']
  }
}
