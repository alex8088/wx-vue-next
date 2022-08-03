import { withInstall, type WithInstallType } from '../utils'

import Tabs from './tabs'
import TabPane from './tab-pane.vue'

export const WxTabs: WithInstallType<typeof Tabs> = withInstall(Tabs)

export const WxTabPane: WithInstallType<typeof TabPane> = withInstall(TabPane)

export type WxTabsInstance = InstanceType<typeof Tabs>

export type WxTabPaneInstance = InstanceType<typeof TabPane>

export type { TabsProps, TabPaneProps } from './props'
