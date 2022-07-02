import { withInstall, type WithInstallType } from '../utils'

import Checkbox from './checkbox.vue'
import CheckboxGroup from './checkbox-group.vue'

export const WxCheckbox: WithInstallType<typeof Checkbox> =
  withInstall(Checkbox)

export const WxCheckboxGroup: WithInstallType<typeof CheckboxGroup> =
  withInstall(CheckboxGroup)

export type WxCheckboxInstance = InstanceType<typeof Checkbox>

export type WxCheckboxGroupInstance = InstanceType<typeof CheckboxGroup>

export type {
  CheckboxProps,
  CheckboxGroupProps,
  CheckboxGroupContext
} from './types'
