import type { PropType, ExtractPropTypes, CSSProperties } from 'vue'
import type { SidebarPane } from './types'

export const sidebarProps = {
  modelValue: [String, Number] as PropType<string | number>,
  paneClass: [String, Array] as PropType<string | string[]>,
  paneStyle: [String, Object] as PropType<string | CSSProperties>,
  tabClass: [String, Array] as PropType<string | string[]>,
  tabStyle: [String, Object] as PropType<string | CSSProperties>,
  lineWidth: [Number, String],
  lineHeight: [Number, String],
  lineColor: String,
  lazyLoad: Boolean
}

export type SidebarProps = ExtractPropTypes<typeof sidebarProps>

export const sidebarPaneProps = {
  title: String,
  name: {
    type: [String, Number],
    required: true
  },
  disabled: Boolean
}

export type SidebarPaneProps = ExtractPropTypes<typeof sidebarPaneProps>

export const sidebarNavProps = {
  currentIndex: {
    type: [String, Number] as PropType<string | number>
  },
  items: {
    type: Array as PropType<SidebarPane[]>,
    default: []
  },
  tabClass: [String, Array] as PropType<string | string[]>,
  tabStyle: [String, Object] as PropType<string | CSSProperties>
}

export type SidebarNavProps = ExtractPropTypes<typeof sidebarNavProps>
