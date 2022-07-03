import type { PropType, ExtractPropTypes } from 'vue'
import type { FormFieldRule } from '../hooks'
import type { Arrayable } from '../utils'

export const textareaProps = {
  modelValue: String,
  field: String,
  rules: [Object, Array] as PropType<Arrayable<FormFieldRule>>,
  rows: {
    type: Number,
    default: 3
  },
  maxLength: Number,
  autosize: Boolean,
  readonly: Boolean,
  disabled: Boolean
}

export type TextareaProps = ExtractPropTypes<typeof textareaProps>
