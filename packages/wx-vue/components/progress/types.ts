import type { PropType, ExtractPropTypes } from 'vue'

export const progressProps = {
  percentage: {
    type: Number,
    default: 0,
    required: true,
    validator: (val): boolean => {
      return val >= 0 && val <= 100
    }
  },
  status: {
    type: String as PropType<'success' | 'fail'>,
    validator: (val): boolean => {
      return ['success', 'fail'].indexOf(val) > -1
    }
  },
  strokeWidth: {
    type: Number,
    default: 4
  },
  color: String,
  showText: {
    type: Boolean,
    default: true
  }
}

export type ProgressProps = ExtractPropTypes<typeof progressProps>
