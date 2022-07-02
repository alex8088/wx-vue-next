import type {
  PropType,
  ExtractPropTypes,
  InjectionKey,
  ComputedRef,
  WritableComputedRef
} from 'vue'
import type { FormFieldRule } from '../hooks'
import type { Arrayable } from '../utils'

export const radioGroupProps = {
  modelValue: [String, Number, Boolean],
  name: String,
  field: String,
  rules: [Object, Array] as PropType<Arrayable<FormFieldRule>>
}

export type RadioGroupProps = ExtractPropTypes<typeof radioGroupProps>

export const radioProps = {
  name: String,
  value: [String, Number, Boolean],
  disabled: Boolean
}

export type RadioProps = ExtractPropTypes<typeof radioProps>

export interface RadioGroupContext {
  name: ComputedRef<string>
  value?: WritableComputedRef<string | number | boolean | undefined>
}

export const radioGroupContextKey: InjectionKey<RadioGroupContext> =
  Symbol('radioGroupContext')
