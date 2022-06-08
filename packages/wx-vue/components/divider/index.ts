import { withInstall, type WithInstallType } from '../utils'

import Divider from './divider.vue'

export const WxDivider: WithInstallType<typeof Divider> = withInstall(Divider)

export default WxDivider

export type WxDividerInstance = InstanceType<typeof Divider>
