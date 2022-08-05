import type { PropType, CSSProperties, ExtractPropTypes } from 'vue'
import type { AvatarShape, AvatarSize } from './types'

export const avatarProps = {
  shape: {
    type: String as PropType<AvatarShape>,
    default: 'circle' as AvatarShape
  },
  size: {
    type: [String, Number] as PropType<AvatarSize>,
    default: 'medium' as AvatarSize
  },
  index: Number
}

export type AvatarProps = ExtractPropTypes<typeof avatarProps>

export const avatarGroupProps = {
  shape: {
    type: String as PropType<AvatarShape>,
    default: 'circle' as AvatarShape
  },
  size: {
    type: [String, Number] as PropType<AvatarSize>,
    default: 'medium' as AvatarSize
  },
  maxCount: {
    type: Number,
    default: 0
  },
  zIndexAscend: Boolean,
  moreAvatarStyle: [String, Object] as PropType<string | CSSProperties>
}

export type AvatarGroupProps = ExtractPropTypes<typeof avatarGroupProps>
