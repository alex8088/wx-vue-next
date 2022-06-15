import type { ExtractPropTypes } from 'vue'

export const dialogProps = {
  visible: Boolean,
  hideOnBlur: Boolean
}

export type DialogProps = ExtractPropTypes<typeof dialogProps>
