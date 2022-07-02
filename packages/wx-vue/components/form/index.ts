import { withInstall, type WithInstallType } from '../utils'

import Form from './form.vue'
import FormGroup from './form-group.vue'

export const WxForm: WithInstallType<typeof Form> = withInstall(Form)

export const WxFormGroup: WithInstallType<typeof FormGroup> =
  withInstall(FormGroup)

export type WxFormInstance = InstanceType<typeof Form>

export type WxFormGroupInstance = InstanceType<typeof FormGroup>

export type {
  FormProps,
  FormContext,
  FormGroupProps,
  FormGroupContext
} from './types'

export type {
  FormRules,
  FormFieldRule,
  FormValidateReturn,
  FormValidateCallback
} from '../hooks'
