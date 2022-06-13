import type { PropType, ExtractPropTypes } from 'vue'

export type ToastType = 'success' | 'fail' | 'loading' | 'text'

export const toastProps = {
  visible: Boolean,
  type: {
    type: String as PropType<ToastType>,
    default: 'text' as ToastType,
    validator: (val: ToastType): boolean => {
      if (!val) return true
      return ['success', 'fail', 'loading', 'text'].includes(val)
    }
  },
  duration: {
    type: Number,
    default: 2000
  },
  message: String
}

export type ToastProps = ExtractPropTypes<typeof toastProps>

export interface ToastReturn {
  close: () => void
}

export type ToastOptions =
  | string
  | Omit<Partial<ToastProps>, 'visible' | 'type'>

export interface ToastFn {
  (options?: ToastOptions): ToastReturn
  success: (options?: ToastOptions) => ToastReturn
  fail: (options?: ToastOptions) => ToastReturn
  loading: (options?: ToastOptions) => ToastReturn
}
