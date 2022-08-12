import { withInstall, type WithInstallType } from '../utils'

import Tag from './tag.vue'

export const WxTag: WithInstallType<typeof Tag> = withInstall(Tag)

export default WxTag

export type WxTagInstance = InstanceType<typeof Tag>

export type { TagProps } from './props'
