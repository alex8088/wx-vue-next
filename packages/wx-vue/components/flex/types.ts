import type { PropType, ExtractPropTypes } from 'vue'

const tag = {
  type: String as PropType<keyof HTMLElementTagNameMap>,
  default: 'div'
}

export const flexProps = {
  tag
}

export type FlexProps = ExtractPropTypes<typeof flexProps>

export const flexItemProps = {
  tag
}

export type FlexItemProps = ExtractPropTypes<typeof flexItemProps>
