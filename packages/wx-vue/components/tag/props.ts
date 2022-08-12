import type { PropType, ExtractPropTypes } from 'vue'

type TagColor =
  | 'red'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indego'
  | 'purple'
  | 'cyan'
  | 'magenta'
  | 'gray'

type TagSize = 'large' | 'medium' | 'small'

export const tagProps = {
  color: String as PropType<TagColor | string>,
  size: {
    type: String as PropType<TagSize>,
    default: 'medium' as TagSize
  },
  bordered: Boolean,
  round: Boolean,
  closeable: Boolean
}

export type TagProps = ExtractPropTypes<typeof tagProps>
