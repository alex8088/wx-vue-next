import type { ExtractPropTypes } from 'vue'

export const topTipProps = {
  visible: Boolean,
  message: String,
  duration: {
    type: Number,
    default: 2000
  }
}

export type TopTipProps = ExtractPropTypes<typeof topTipProps>

export interface TopTipReturn {
  close: () => void
}

export type TopTipOptions = string | Omit<Partial<TopTipProps>, 'visible'>

export interface TopTipFn {
  (options?: TopTipOptions): TopTipReturn
}
