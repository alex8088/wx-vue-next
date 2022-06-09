import type { Plugin } from 'vue'
import { WxButton } from './button'
import { WxCollapse, WxCollapseItem } from './collapse'

const components: Record<string, Plugin> = {
  WxButton,
  WxCollapse,
  WxCollapseItem
}

export default components
