import { withInstall, type WithInstallType } from '../utils'

import Sticky from './sticky.vue'

export const WxSticky: WithInstallType<typeof Sticky> = withInstall(Sticky)

export type WxStickyInstance = InstanceType<typeof Sticky>

export type { StickyProps } from './types'
