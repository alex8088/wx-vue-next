import type { PropType, ExtractPropTypes } from 'vue'
import type { FormFieldRule } from '../hooks'
import type { Arrayable } from '../utils'

export const inputProps = {
  modelValue: [String, Number] as PropType<string | number>,
  field: String,
  rules: [Object, Array] as PropType<Arrayable<FormFieldRule>>,
  type: {
    type: String as PropType<'text' | 'number' | 'password'>,
    default: 'text',
    validator(val): boolean {
      return ['text', 'number', 'password'].indexOf(val) > -1
    }
  },
  label: String,
  labelWidth: [Number, String],
  desc: String,
  cellStyle: Object,
  clearable: Boolean,
  required: Boolean,
  readonly: Boolean,
  disabled: Boolean
}

export type InputProps = ExtractPropTypes<typeof inputProps>
