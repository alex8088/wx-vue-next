import type { App } from 'vue'
import components from './components'
export * from './action-sheet'
export * from './badge'
export * from './button'
export * from './checkbox'
export * from './collapse'
export * from './dialog'
export * from './divider'
export * from './flex'
export * from './form'
export * from './grid'
export * from './half-screen-dialog'
export * from './input'
export * from './link'
export * from './list'
export * from './message-box'
export * from './progress'
export * from './radio'
export * from './rate'
export * from './skeleton'
export * from './sticky'
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
    WxActionSheet: typeof import('./action-sheet')['WxActionSheet']
    WxActionSheetItem: typeof import('./action-sheet')['WxActionSheetItem']
    WxBadge: typeof import('./badge')['WxBadge']
    WxButton: typeof import('./button')['WxButton']
    WxCheckbox: typeof import('./checkbox')['WxCheckbox']
    WxCheckboxGroup: typeof import('./checkbox')['WxCheckboxGroup']
    WxCollapse: typeof import('./collapse')['WxCollapse']
    WxCollapseItem: typeof import('./collapse')['WxCollapseItem']
    WxDialog: typeof import('./dialog')['WxDialog']
    WxDivider: typeof import('./divider')['WxDivider']
    WxFlex: typeof import('./flex')['WxFlex']
    WxFlexItem: typeof import('./flex')['WxFlexItem']
    WxForm: typeof import('./form')['WxForm']
    WxFormGroup: typeof import('./form')['WxFormGroup']
    WxGrid: typeof import('./grid')['WxGrid']
    WxGridItem: typeof import('./grid')['WxGridItem']
    WxHalfScreenDialog: typeof import('./half-screen-dialog')['WxHalfScreenDialog']
    WxInput: typeof import('./input')['WxInput']
    WxLink: typeof import('./link')['WxLink']
    WxList: typeof import('./list')['WxList']
    WxListItem: typeof import('./list')['WxListItem']
    WxProgress: typeof import('./progress')['WxProgress']
    WxRadio: typeof import('./radio')['WxRadio']
    WxRadioGroup: typeof import('./radio')['WxRadioGroup']
    WxRate: typeof import('./rate')['WxRate']
    WxSkeleton: typeof import('./skeleton')['WxSkeleton']
    WxSkeletonLine: typeof import('./skeleton')['WxSkeletonLine']
    WxSkeletonShape: typeof import('./skeleton')['WxSkeletonShape']
    WxSticky: typeof import('./sticky')['WxSticky']
  }

  interface ComponentCustomProperties {
    $messageBox: typeof import('./message-box')['WxMessageBox']
    $toast: typeof import('./toast')['WxToast']
    $topTip: typeof import('./top-tip')['WxTopTip']
  }
}
