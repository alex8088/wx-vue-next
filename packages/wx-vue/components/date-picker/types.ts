import type { PropType, ExtractPropTypes } from 'vue'

export const datePickerProps = {
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
  defaultValue: {
    type: Date,
    default: new Date()
  },
  yearMonth: Boolean,
  formatter: {
    type: Function as PropType<
      (type: 'year' | 'month' | 'day', value: number) => string
    >,
    default: (_, value: number): string => `${value}`
  },
  start: {
    type: [Number, Date],
    default: new Date().getFullYear() - 5
  },
  end: {
    type: [Number, Date],
    default: new Date().getFullYear() + 5
  },
  cron: {
    type: String,
    default: '* * *'
  }
}

export type DatePickerProps = ExtractPropTypes<typeof datePickerProps>
