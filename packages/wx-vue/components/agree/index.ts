import { withInstall, type WithInstallType } from '../utils'

import Agree from './agree.vue'

export const WxAgree: WithInstallType<typeof Agree> = withInstall(Agree)

export default WxAgree

export type WxAgreeInstance = InstanceType<typeof Agree> & { shake: () => void }

export type { AgreeProps } from './types'
