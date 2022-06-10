import type { ExtractPropTypes } from 'vue'

export const listProps = {
  title: String
}

export type ListProps = ExtractPropTypes<typeof listProps>

export const listItemProps = {
  icon: String,
  title: String,
  desc: String,
  access: {
    type: Boolean,
    default: true
  }
}

export type ListItemProps = ExtractPropTypes<typeof listItemProps>
