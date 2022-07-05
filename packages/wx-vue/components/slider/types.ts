import type { ExtractPropTypes } from 'vue'

export const sliderProps = {
  modelValue: Number,
  step: {
    type: Number,
    default: 1
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  showValue: Boolean,
  disabled: Boolean
}

export type SliderProps = ExtractPropTypes<typeof sliderProps>
