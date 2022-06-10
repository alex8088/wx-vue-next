import { withInstall, type WithInstallType } from '../utils'

import List from './list.vue'
import ListItem from './list-item.vue'

export const WxList: WithInstallType<typeof List> = withInstall(List)

export const WxListItem: WithInstallType<typeof ListItem> =
  withInstall(ListItem)

export type WxListInstance = InstanceType<typeof List>

export type WxListItemInstance = InstanceType<typeof ListItem>

export type { ListProps, ListItemProps } from './types'
