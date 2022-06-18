import { withInstall, type WithInstallType } from '../utils'

import ActionSheet from './action-sheet.vue'
import ActionSheetItem from './action-sheet-item.vue'

export const WxActionSheet: WithInstallType<typeof ActionSheet> =
  withInstall(ActionSheet)

export const WxActionSheetItem: WithInstallType<typeof ActionSheetItem> =
  withInstall(ActionSheetItem)

export type WxActionSheetInstance = InstanceType<typeof ActionSheet>

export type WxActionSheetItemInstance = InstanceType<typeof ActionSheetItem>

export type {
  ActionSheetProps,
  ActionSheetItemProps,
  ActionSheetContext
} from './types'
