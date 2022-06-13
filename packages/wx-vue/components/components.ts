import type { Plugin } from 'vue'
import { WxButton } from './button'
import { WxCollapse, WxCollapseItem } from './collapse'
import { WxDivider } from './divider'
import { WxFlex, WxFlexItem } from './flex'
import { WxList, WxListItem } from './list'
import { WxToast } from './toast'

const components: Record<string, Plugin> = {
  WxButton,
  WxCollapse,
  WxCollapseItem,
  WxDivider,
  WxFlex,
  WxFlexItem,
  WxList,
  WxListItem,
  WxToast
}

export default components
