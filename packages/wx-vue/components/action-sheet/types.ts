import type { ExtractPropTypes, InjectionKey } from 'vue'

export const actionSheetProps = {
  visible: Boolean,
  title: String,
  cancelText: {
    type: String,
    default: 'Cancel'
  },
  hiddenCancel: Boolean
}

export type ActionSheetProps = ExtractPropTypes<typeof actionSheetProps>

export const actionSheetItemProps = {
  text: String,
  negative: Boolean,
  disabled: Boolean
}

export type ActionSheetItemProps = ExtractPropTypes<typeof actionSheetItemProps>

export interface ActionSheetContext {
  close: () => void
}

export const actionSheetContextKey: InjectionKey<ActionSheetContext> = Symbol(
  'actionSheetContextKey'
)
