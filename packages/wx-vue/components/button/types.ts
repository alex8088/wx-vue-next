import type { PropType, ExtractPropTypes } from 'vue'

export type ButtonType = 'default' | 'light' | 'warn'

export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default' as ButtonType,
    validator: (val: ButtonType): boolean => {
      if (!val) return true
      return ['default', 'light', 'warn'].includes(val)
    }
  },
  disabled: Boolean,
  loading: Boolean,
  mini: Boolean
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
