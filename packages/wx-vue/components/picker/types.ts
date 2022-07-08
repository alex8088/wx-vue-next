import type { PropType, ExtractPropTypes } from 'vue'
import type { Arrayable } from '../utils'

export type PickerOption = {
  label: string
  value?: string | number | boolean
  disabled?: boolean
  children?: PickerOption[]
}

export type PickerOptions = PickerOption[]

export const pickerProps = {
  visible: Boolean,
  title: String,
  subtitle: String,
  hideCloseIcon: Boolean,
  closeIconPosition: {
    type: String as PropType<'left' | 'right'>,
    default: 'left'
  },
  okButtonText: {
    type: String,
    default: 'Ok'
  },
  loading: Boolean,
  options: {
    type: Array as PropType<PickerOptions | PickerOptions[]>,
    default: []
  },
  defaultValue: [Array, String, Number, Boolean] as PropType<
    Arrayable<string | number | boolean>
  >,
  depth: Number
}

export type PickerProps = ExtractPropTypes<typeof pickerProps>

export const pickerGroupProps = {
  options: {
    type: Array as PropType<PickerOptions>,
    default: []
  },
  defaultValue: [String, Number, Boolean],
  level: Number
}

export type PickerGroupProps = ExtractPropTypes<typeof pickerGroupProps>
