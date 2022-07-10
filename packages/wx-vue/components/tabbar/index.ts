import { withInstall, type WithInstallType } from '../utils'

import Tabbar from './tarbar.vue'
import TabbarItem from './tarbar-item.vue'

export const WxTabbar: WithInstallType<typeof Tabbar> = withInstall(Tabbar)

export const WxTabbarItem: WithInstallType<typeof TabbarItem> =
  withInstall(TabbarItem)

export type WxTabbarInstance = InstanceType<typeof Tabbar>

export type WxTabbarItemInstance = InstanceType<typeof TabbarItem>

export type {
  TabbarActiveName,
  TabbarProps,
  TabbarItemProps,
  TabbarContext
} from './types'
