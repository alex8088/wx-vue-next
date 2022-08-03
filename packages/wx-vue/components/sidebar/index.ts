import { withInstall, type WithInstallType } from '../utils'

import Sidebar from './sidebar'
import SidebarPane from './sidebar-pane.vue'

export const WxSidebar: WithInstallType<typeof Sidebar> = withInstall(Sidebar)

export const WxSidebarPane: WithInstallType<typeof SidebarPane> =
  withInstall(SidebarPane)

export type WxSidebarInstance = InstanceType<typeof Sidebar>

export type WxSidebarPaneInstance = InstanceType<typeof SidebarPane>

export type { SidebarProps, SidebarPaneProps } from './props'
