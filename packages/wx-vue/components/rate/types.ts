import type { PropType, ExtractPropTypes } from 'vue'

export const rateProps = {
  modelValue: Number,
  count: {
    type: Number,
    default: 5
  },
  size: Number,
  color: String,
  spacing: Number,
  texts: {
    type: Array as PropType<string[]>,
    default: (): string[] => []
  },
  disabled: Boolean
}

export type RateProps = ExtractPropTypes<typeof rateProps>
