import type { Plugin } from 'vue'
import { WxButton } from './button'
import { WxCollapse, WxCollapseItem } from './collapse'
import { WxDivider } from './divider'
import { WxList, WxListItem } from './list'

const components: Record<string, Plugin> = {
  WxButton,
  WxCollapse,
  WxCollapseItem,
  WxDivider,
  WxList,
  WxListItem
}

export default components
