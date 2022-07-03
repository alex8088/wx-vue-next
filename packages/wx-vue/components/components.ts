import type { Plugin } from 'vue'
import { WxActionSheet, WxActionSheetItem } from './action-sheet'
import { WxBadge } from './badge'
import { WxButton } from './button'
import { WxCheckbox, WxCheckboxGroup } from './checkbox'
import { WxCollapse, WxCollapseItem } from './collapse'
import { WxDialog } from './dialog'
import { WxDivider } from './divider'
import { WxFlex, WxFlexItem } from './flex'
import { WxForm, WxFormGroup } from './form'
import { WxGrid, WxGridItem } from './grid'
import { WxHalfScreenDialog } from './half-screen-dialog'
import { WxInput } from './input'
import { WxLink } from './link'
import { WxList, WxListItem } from './list'
import { WxMessageBox } from './message-box'
import { WxProgress } from './progress'
import { WxRadio, WxRadioGroup } from './radio'
import { WxRate } from './rate'
import { WxSkeleton, WxSkeletonLine, WxSkeletonShape } from './skeleton'
import { WxSticky } from './sticky'
import { WxTextarea } from './textarea'
import { WxToast } from './toast'
import { WxTopTip } from './top-tip'

const components: Record<string, Plugin> = {
  WxActionSheet,
  WxActionSheetItem,
  WxBadge,
  WxButton,
  WxCheckbox,
  WxCheckboxGroup,
  WxCollapse,
  WxCollapseItem,
  WxDialog,
  WxDivider,
  WxFlex,
  WxFlexItem,
  WxForm,
  WxFormGroup,
  WxGrid,
  WxGridItem,
  WxHalfScreenDialog,
  WxInput,
  WxLink,
  WxList,
  WxListItem,
  WxMessageBox,
  WxProgress,
  WxRadio,
  WxRadioGroup,
  WxRate,
  WxSkeleton,
  WxSkeletonLine,
  WxSkeletonShape,
  WxSticky,
  WxTextarea,
  WxToast,
  WxTopTip
}

export default components
