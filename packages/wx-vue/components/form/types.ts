import type { PropType, ExtractPropTypes, InjectionKey, ComputedRef } from 'vue'
import type { FormRules, FormFieldRule, FormFieldModel } from '../hooks'
import type { Arrayable } from '../utils'

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

export const formCellProps = {
  field: String,
  rules: [Object, Array] as PropType<Arrayable<FormFieldRule>>,
  label: String,
  labelWidth: [Number, String],
  placeholder: String,
  displayText: String,
  helpText: String,
  showArrow: Boolean,
  disabled: Boolean,
  required: Boolean
}

export type FormCellProps = ExtractPropTypes<typeof formCellProps>

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

export interface FormCellContext
  extends Pick<FormFieldModel, 'validate' | 'clearValidate'> {
  disabled: ComputedRef<boolean>
}

export const formCellContextKey: InjectionKey<FormCellContext> =
  Symbol('formCellContextKey')
