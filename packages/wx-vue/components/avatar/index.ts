import { withInstall, type WithInstallType } from '../utils'

import Avatar from './avatar.vue'
import AvatarGroup from './avatar-group'

export const WxAvatar: WithInstallType<typeof Avatar> = withInstall(Avatar)

export const WxAvatarGroup: WithInstallType<typeof AvatarGroup> =
  withInstall(AvatarGroup)

export type WxAvatarInstance = InstanceType<typeof Avatar>

export type WxAvatarGroupInstance = InstanceType<typeof AvatarGroup>

export type { AvatarProps, AvatarGroupProps } from './props'
