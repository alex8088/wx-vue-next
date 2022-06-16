import type { Plugin } from 'vue'
import { WxBadge } from './badge'
import { WxButton } from './button'
import { WxCollapse, WxCollapseItem } from './collapse'
import { WxDialog } from './dialog'
import { WxDivider } from './divider'
import { WxFlex, WxFlexItem } from './flex'
import { WxGrid, WxGridItem } from './grid'
import { WxList, WxListItem } from './list'
import { WxMessageBox } from './message-box'
import { WxToast } from './toast'

const components: Record<string, Plugin> = {
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
  WxList,
  WxListItem,
  WxMessageBox,
  WxToast
}

export default components
