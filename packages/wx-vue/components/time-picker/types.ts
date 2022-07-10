import type { PropType, ExtractPropTypes } from 'vue'

export const timePickerProps = {
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
  defaultValue: Array as PropType<number[]>,
  formatter: {
    type: Function as PropType<
      (type: 'hour' | 'minute', value: number) => string
    >,
    default: (_, value: number): string =>
      value < 10 ? `0${value}` : `${value}`
  },
  start: {
    type: Number,
    default: 0,
    validator(value): boolean {
      return value >= 0 && value < 12
    }
  },
  end: {
    type: Number,
    default: 23,
    validator(value): boolean {
      return value >= 12 && value < 24
    }
  },
  timeSpan: {
    type: Number,
    default: 5,
    validator(value): boolean {
      return [1, 5, 10, 15, 20, 30].indexOf(value) > -1
    }
  }
}

export type TimePickerProps = ExtractPropTypes<typeof timePickerProps>
