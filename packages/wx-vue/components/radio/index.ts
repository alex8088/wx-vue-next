import { withInstall, type WithInstallType } from '../utils'

import Radio from './radio.vue'
import RadioGroup from './radio-group.vue'

export const WxRadio: WithInstallType<typeof Radio> = withInstall(Radio)

export const WxRadioGroup: WithInstallType<typeof RadioGroup> =
  withInstall(RadioGroup)

export type WxRadioInstance = InstanceType<typeof Radio>

export type WxRadioGroupInstance = InstanceType<typeof RadioGroup>

export type { RadioProps, RadioGroupProps, RadioGroupContext } from './types'
