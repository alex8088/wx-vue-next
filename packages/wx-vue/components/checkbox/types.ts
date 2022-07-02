import type {
  PropType,
  ExtractPropTypes,
  InjectionKey,
  ComputedRef,
  WritableComputedRef
} from 'vue'
import type { FormFieldRule } from '../hooks'
import type { Arrayable } from '../utils'

export const checkboxGroupProps = {
  modelValue: Array as PropType<Array<string | number>>,
  name: String,
  field: String,
  rules: [Object, Array] as PropType<Arrayable<FormFieldRule>>
}

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>

export const checkboxProps = {
  name: String,
  value: [String, Number],
  disabled: Boolean
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>

export interface CheckboxGroupContext {
  name: ComputedRef<string>
  value?: WritableComputedRef<(string | number)[] | undefined>
}

export const checkboxGroupContextKey: InjectionKey<CheckboxGroupContext> =
  Symbol('checkboxGroupContext')
