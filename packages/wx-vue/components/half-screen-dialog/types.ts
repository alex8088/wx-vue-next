import type { PropType, ExtractPropTypes } from 'vue'

export const halfScreenDialogProps = {
  visible: Boolean,
  title: String,
  subtitle: String,
  hideCloseIcon: Boolean,
  closeIconPosition: {
    type: String as PropType<'left' | 'right'>,
    default: 'left'
  },
  large: Boolean
}

export type HalfScreenDialogProps = ExtractPropTypes<
  typeof halfScreenDialogProps
>
