import { withInstall, type WithInstallType } from '../utils'

import Picker from './picker.vue'

export const WxPicker: WithInstallType<typeof Picker> = withInstall(Picker)

export type WxPickerInstance = InstanceType<typeof Picker>

export type { PickerProps, PickerOption, PickerOptions } from './types'
