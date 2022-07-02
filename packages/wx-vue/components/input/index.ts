import { withInstall, type WithInstallType } from '../utils'

import Input from './input.vue'

export const WxInput: WithInstallType<typeof Input> = withInstall(Input)

export default WxInput

export type WxInputInstance = InstanceType<typeof Input>

export type { InputProps } from './types'
