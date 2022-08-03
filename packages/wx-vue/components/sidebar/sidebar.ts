import { defineComponent, ref, computed, watch, provide, h, toRef } from 'vue'
import type { CSSProperties, VNode, Slots } from 'vue'
import type { SidebarPane } from './types'
import { sidebarProps, type SidebarPaneProps } from './props'
import { sidebarContentKey } from './content'
import SidebarNav from './sidebar-nav'
import { flattenChildren, isDef, toUnit } from '../utils'

export default defineComponent({
  name: 'WxSidebar',
  props: sidebarProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit, slots }) {
    const currentIndex = ref<string | number | undefined>(props.modelValue)

    watch(
      () => props.modelValue,
      (val) => {
        if (currentIndex.value === val || !isDef(val)) {
          return
        }
        currentIndex.value = val
      }
    )

    const tabsSyl = computed<CSSProperties>(() => {
      const style: CSSProperties = {}
      const lineHeight = props.lineHeight
      if (lineHeight && lineHeight !== 20) {
        style['--sidebar-border-line-height'] = toUnit(lineHeight)
      }
      const lineWidth = props.lineWidth
      if (lineWidth && lineWidth !== 4) {
        style['--sidebar-border-line-width'] = toUnit(lineWidth)
      }
      const lineColor = props.lineColor
      if (lineColor) {
        style['--sidebar-border-line-color'] = lineColor
      }
      return style
    })

    provide(sidebarContentKey, {
      currentIndex,
      lazyLoad: props.lazyLoad,
      paneClass: toRef(props, 'paneClass'),
      paneStyle: toRef(props, 'paneStyle')
    })

    const getPanes = (): SidebarPane[] => {
      const components = flattenChildren(
        slots.default?.(),
        'WxSidebarPane'
      ).map((t) => {
        const props = t.props as SidebarPaneProps
        const item: SidebarPane = {
          index: props.name,
          title: props.title,
          disabled: isDef(props.disabled) && props.disabled !== false,
          slots: t.children as Slots
        }
        return item
      })
      return components || []
    }

    return (): VNode =>
      h('div', { class: ['weui-sidebar'], style: tabsSyl.value }, [
        h(SidebarNav, {
          items: getPanes(),
          currentIndex: currentIndex.value,
          tabClass: props.tabClass,
          tabStyle: props.tabStyle,
          onTabClick: (index: string | number | undefined) => {
            currentIndex.value = index
            emit('update:modelValue', index)
            emit('change', index)
          }
        }),
        h('div', { class: ['weui-sidebar__pane'] }, slots.default?.())
      ])
  }
})
