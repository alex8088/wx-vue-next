import { withInstall, type WithInstallType } from '../utils'

import Switch from './switch.vue'

export const WxSwitch: WithInstallType<typeof Switch> = withInstall(Switch)

export default WxSwitch

export type WxSwitchInstance = InstanceType<typeof Switch>

export type { SwitchProps } from './types'
