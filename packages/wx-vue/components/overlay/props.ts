import type { ExtractPropTypes } from 'vue'

export const overlayProps = {
  visible: Boolean,
  hideOnBlur: {
    type: Boolean,
    default: true
  }
}

export type OverlayProps = ExtractPropTypes<typeof overlayProps>
