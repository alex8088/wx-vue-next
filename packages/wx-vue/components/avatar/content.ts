import type { Ref, InjectionKey } from 'vue'
import type { AvatarShape, AvatarSize } from './types'

export type AvatarGroupContent = {
  shape: Ref<AvatarShape>
  size: Ref<AvatarSize>
  zIndexAscend: Ref<boolean>
}

export const avatarGroupContentKey: InjectionKey<AvatarGroupContent> = Symbol(
  'avatarGroupContentKey'
)
