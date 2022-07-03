import type { ExtractPropTypes } from 'vue'

export const switchProps = {
  modelValue: [String, Number, Boolean],
  label: String,
  activeValue: {
    type: [String, Number, Boolean],
    default: true
  },
  inactiveValue: {
    type: [String, Number, Boolean],
    default: false
  },
  disabled: Boolean
}

export type SwitchProps = ExtractPropTypes<typeof switchProps>
