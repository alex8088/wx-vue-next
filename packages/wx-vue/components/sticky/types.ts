import type { PropType, ExtractPropTypes } from 'vue'

export const stickyProps = {
  container: Object as PropType<HTMLElement>,
  offsetTop: {
    type: Number,
    default: 0
  },
  zIndex: Number
}

export type StickyProps = ExtractPropTypes<typeof stickyProps>
