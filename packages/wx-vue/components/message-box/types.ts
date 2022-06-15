import type { PropType, ExtractPropTypes } from 'vue'

export type MessageBoxType = 'alert' | 'confirm'

export const messageBoxProps = {
  type: String as PropType<MessageBoxType>,
  visible: Boolean,
  title: String,
  message: String,
  okButtonText: {
    type: String,
    default: 'Ok'
  },
  cancelButtonText: {
    type: String,
    default: 'Cancel'
  }
}

export type MessageBoxProps = ExtractPropTypes<typeof messageBoxProps>

export type MessageBoxOptions = {
  title?: string
  message: string
  buttonText?: string
  okButtonText?: string
  cancelButtonText?: string
  callback: (action: 0 | 1) => void
}

export type MessageBoxAlertOptions = Omit<
  MessageBoxOptions,
  'title' | 'okButtonText' | 'cancelButtonText'
>

export type MessageBoxConfirmOptions = Omit<MessageBoxOptions, 'buttonText'>

export interface MessageBoxFn {
  (type: MessageBoxType, options: MessageBoxOptions): void
  alert: (options?: MessageBoxAlertOptions) => void
  confirm: (options?: MessageBoxConfirmOptions) => void
}
