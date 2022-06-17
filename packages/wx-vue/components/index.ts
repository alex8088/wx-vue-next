import type { App } from 'vue'
import components from './components'
export * from './badge'
export * from './button'
export * from './collapse'
export * from './dialog'
export * from './divider'
export * from './flex'
export * from './grid'
export * from './list'
export * from './message-box'
export * from './skeleton'
export * from './toast'
export * from './top-tip'

const install = (app: App, options?: Record<string, unknown>): void => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options)
  }
}

export { install }
export default { install }

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    WxBadge: typeof import('./badge')['WxBadge']
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
    WxSkeleton: typeof import('./skeleton')['WxSkeleton']
    WxSkeletonLine: typeof import('./skeleton')['WxSkeletonLine']
    WxSkeletonShape: typeof import('./skeleton')['WxSkeletonShape']
  }

  interface ComponentCustomProperties {
    $messageBox: typeof import('./message-box')['WxMessageBox']
    $toast: typeof import('./toast')['WxToast']
    $topTip: typeof import('./top-tip')['WxTopTip']
  }
}
