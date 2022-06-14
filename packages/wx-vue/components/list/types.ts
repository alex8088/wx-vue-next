import type { ExtractPropTypes } from 'vue'

export const listProps = {
  title: String
}

export type ListProps = ExtractPropTypes<typeof listProps>

export const listItemProps = {
  icon: String,
  title: String,
  subtitle: String,
  desc: String,
  access: Boolean
}

export type ListItemProps = ExtractPropTypes<typeof listItemProps>
