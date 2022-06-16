import { withInstall, type WithInstallType } from '../utils'

import Badge from './badge.vue'

export const WxBadge: WithInstallType<typeof Badge> = withInstall(Badge)

export default WxBadge

export type WxBadgeInstance = InstanceType<typeof Badge>

export type { BadgeProps } from './types'
