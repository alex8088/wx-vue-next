import type { PropType, CSSProperties, ExtractPropTypes } from 'vue'
import type { TabPane } from './types'

export const tabsProps = {
  modelValue: [String, Number] as PropType<string | number>,
  paneClass: [String, Array] as PropType<string | string[]>,
  paneStyle: [String, Object] as PropType<string | CSSProperties>,
  tabClass: [String, Array] as PropType<string | string[]>,
  tabStyle: [String, Object] as PropType<string | CSSProperties>,
  lineWidth: [Number, String],
  lineHeight: [Number, String],
  activeColor: String,
  scrollThreshold: {
    type: Number,
    default: 4
  },
  lazyLoad: Boolean,
  animation: Boolean
}

export type TabsProps = ExtractPropTypes<typeof tabsProps>

export const tabPaneProps = {
  title: String,
  name: {
    type: [String, Number],
    required: true
  },
  disabled: Boolean
}

export type TabPaneProps = ExtractPropTypes<typeof tabPaneProps>

export const tabNavProps = {
  currentIndex: {
    type: [String, Number] as PropType<string | number>
  },
  items: {
    type: Array as PropType<TabPane[]>,
    default: []
  },
  tabClass: [String, Array] as PropType<string | string[]>,
  tabStyle: [String, Object] as PropType<string | CSSProperties>,
  lineWidth: [Number, String],
  scrollThreshold: Number
}

export type TabNavProps = ExtractPropTypes<typeof tabNavProps>
