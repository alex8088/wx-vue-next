import { withInstall, type WithInstallType } from '../utils'

import Link from './link.vue'

export const WxLink: WithInstallType<typeof Link> = withInstall(Link)

export default WxLink

export type WxLinkInstance = InstanceType<typeof Link>

export type { LinkProps } from './types'
