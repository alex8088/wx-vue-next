import type { App } from 'vue'
import components from './components'
export * from './action-sheet'
export * from './agree'
export * from './badge'
export * from './button'
export * from './checkbox'
export * from './collapse'
export * from './date-picker'
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
export * from './picker'
export * from './progress'
export * from './radio'
export * from './rate'
export * from './skeleton'
export * from './slider'
export * from './sticky'
export * from './switch'
export * from './tabbar'
export * from './textarea'
export * from './time-picker'
export * from './toast'
export * from './top-tip'
export * from './uploader'

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
    WxAgree: typeof import('./agree')['WxAgree']
    WxBadge: typeof import('./badge')['WxBadge']
    WxButton: typeof import('./button')['WxButton']
    WxCheckbox: typeof import('./checkbox')['WxCheckbox']
    WxCheckboxGroup: typeof import('./checkbox')['WxCheckboxGroup']
    WxCollapse: typeof import('./collapse')['WxCollapse']
    WxCollapseItem: typeof import('./collapse')['WxCollapseItem']
    WxDatePicker: typeof import('./date-picker')['WxDatePicker']
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
    WxPicker: typeof import('./picker')['WxPicker']
    WxProgress: typeof import('./progress')['WxProgress']
    WxRadio: typeof import('./radio')['WxRadio']
    WxRadioGroup: typeof import('./radio')['WxRadioGroup']
    WxRate: typeof import('./rate')['WxRate']
    WxSkeleton: typeof import('./skeleton')['WxSkeleton']
    WxSkeletonLine: typeof import('./skeleton')['WxSkeletonLine']
    WxSkeletonShape: typeof import('./skeleton')['WxSkeletonShape']
    WxSlider: typeof import('./slider')['WxSlider']
    WxSticky: typeof import('./sticky')['WxSticky']
    WxSwitch: typeof import('./switch')['WxSwitch']
    WxTabbar: typeof import('./tabbar')['WxTabbar']
    WxTabbarItem: typeof import('./tabbar')['WxTabbarItem']
    WxTextarea: typeof import('./textarea')['WxTextarea']
    WxTimePicker: typeof import('./time-picker')['WxTimePicker']
    WxUploader: typeof import('./uploader')['WxUploader']
  }

  interface ComponentCustomProperties {
    $messageBox: typeof import('./message-box')['WxMessageBox']
    $toast: typeof import('./toast')['WxToast']
    $topTip: typeof import('./top-tip')['WxTopTip']
  }
}
