import { withInstall, type WithInstallType } from '../utils'

import DatePicker from './date-picker.vue'

export const WxDatePicker: WithInstallType<typeof DatePicker> =
  withInstall(DatePicker)

export default WxDatePicker

export type WxDatePickerInstance = InstanceType<typeof DatePicker>

export type { DatePickerProps } from './types'
