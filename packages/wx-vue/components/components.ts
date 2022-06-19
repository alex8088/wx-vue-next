import type { Plugin } from 'vue'
import { WxActionSheet, WxActionSheetItem } from './action-sheet'
import { WxBadge } from './badge'
import { WxButton } from './button'
import { WxCollapse, WxCollapseItem } from './collapse'
import { WxDialog } from './dialog'
import { WxDivider } from './divider'
import { WxFlex, WxFlexItem } from './flex'
import { WxGrid, WxGridItem } from './grid'
import { WxHalfScreenDialog } from './half-screen-dialog'
import { WxList, WxListItem } from './list'
import { WxMessageBox } from './message-box'
import { WxProgress } from './progress'
import { WxRate } from './rate'
import { WxSkeleton, WxSkeletonLine, WxSkeletonShape } from './skeleton'
import { WxSticky } from './sticky'
import { WxToast } from './toast'
import { WxTopTip } from './top-tip'

const components: Record<string, Plugin> = {
  WxActionSheet,
  WxActionSheetItem,
  WxBadge,
  WxButton,
  WxCollapse,
  WxCollapseItem,
  WxDialog,
  WxDivider,
  WxFlex,
  WxFlexItem,
  WxGrid,
  WxGridItem,
  WxHalfScreenDialog,
  WxList,
  WxListItem,
  WxMessageBox,
  WxProgress,
  WxRate,
  WxSkeleton,
  WxSkeletonLine,
  WxSkeletonShape,
  WxSticky,
  WxToast,
  WxTopTip
}

export default components
