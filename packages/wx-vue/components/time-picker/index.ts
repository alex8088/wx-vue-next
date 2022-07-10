import { withInstall, type WithInstallType } from '../utils'

import TimePicker from './time-picker.vue'

export const WxTimePicker: WithInstallType<typeof TimePicker> =
  withInstall(TimePicker)

export default WxTimePicker

export type WxTimePickerInstance = InstanceType<typeof TimePicker>

export type { TimePickerProps } from './types'
