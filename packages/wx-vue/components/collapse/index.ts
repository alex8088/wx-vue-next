import { withInstall, type WithInstallType } from '../utils'

import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'

export const WxCollapse: WithInstallType<typeof Collapse> =
  withInstall(Collapse)

export const WxCollapseItem: WithInstallType<typeof CollapseItem> =
  withInstall(CollapseItem)

export type WxCollapseInstance = InstanceType<typeof Collapse>

export type WxCollapseItemInstance = InstanceType<typeof CollapseItem>

export type {
  CollapseActiveName,
  CollapseModelValue,
  CollapseProps,
  CollapseItemProps,
  CollapseContext
} from './types'
