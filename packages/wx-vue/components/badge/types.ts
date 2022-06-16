import type { PropType, ExtractPropTypes } from 'vue'

export const badgeProps = {
  content: [Number, String],
  dot: Boolean,
  max: {
    type: Number,
    default: 99
  },
  offset: Array as PropType<Array<string | number>>,
  hidden: Boolean,
  color: String
}

export type BadgeProps = ExtractPropTypes<typeof badgeProps>
