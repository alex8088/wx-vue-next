import type { PropType, ExtractPropTypes, InjectionKey } from 'vue'
import type { FormRules } from '../hooks'

export const formProps = {
  model: {
    type: Object,
    required: true
  },
  rules: Object as PropType<FormRules>,
  title: String,
  desc: String,
  disabled: Boolean,
  hideAsterisk: Boolean,
  showSubmitButton: Boolean,
  submitText: {
    type: String,
    default: 'Submit'
  }
}

export type FormProps = ExtractPropTypes<typeof formProps>

export const formGroupProps = {
  title: String,
  labelWidth: [Number, String],
  disabled: Boolean
}

export type FormGroupProps = ExtractPropTypes<typeof formGroupProps>

export interface FormContext {
  disabled?: boolean
  hideAsterisk?: boolean
}

export const formContextKey: InjectionKey<FormContext> =
  Symbol('formContextKey')

export interface FormGroupContext {
  labelWidth?: number | string
  disabled?: boolean
}

export const formGroupContextKey: InjectionKey<FormGroupContext> = Symbol(
  'formGroupContextKey'
)
