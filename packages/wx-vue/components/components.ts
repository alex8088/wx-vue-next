import type { Plugin } from 'vue'
import { WxButton } from './button'
import { WxCollapse, WxCollapseItem } from './collapse'
import { WxDivider } from './divider'

const components: Record<string, Plugin> = {
  WxButton,
  WxCollapse,
  WxCollapseItem,
  WxDivider
}

export default components
