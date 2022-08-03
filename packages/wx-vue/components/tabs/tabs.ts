import {
  defineComponent,
  ref,
  computed,
  watch,
  provide,
  h,
  TransitionGroup,
  toRef
} from 'vue'
import type { CSSProperties, VNode, Slots } from 'vue'
import type { TabPane } from './types'
import { tabsProps, type TabPaneProps } from './props'
import { tabsContentKey } from './content'
import TabNav from './tab-nav'
import { flattenChildren, isDef, toUnit } from '../utils'

export default defineComponent({
  name: 'WxTabs',
  props: tabsProps,
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
      if (lineHeight && lineHeight !== 4) {
        style['--tab-line-height'] = toUnit(lineHeight)
      }
      const activeColor = props.activeColor
      if (activeColor) {
        style['--tab-active-color'] = activeColor
      }
      return style
    })

    provide(tabsContentKey, {
      lazyLoad: props.lazyLoad,
      currentIndex,
      paneClass: toRef(props, 'paneClass'),
      paneStyle: toRef(props, 'paneStyle')
    })

    const getPanes = (vnodes: VNode[]): TabPane[] => {
      const components = vnodes.map((t) => {
        const props = t.props as TabPaneProps
        const item: TabPane = {
          index: props.name,
          title: props.title,
          disabled: isDef(props.disabled) && props.disabled !== false,
          slots: t.children as Slots
        }
        return item
      })
      return components || []
    }

    const getChildren = (vnodes: VNode[]): VNode[] => {
      vnodes.forEach((n, index) => {
        n.key = n.props!['name'] || index
      })
      return vnodes
    }

    const transitionName = ref<string>('')

    return (): VNode => {
      const children = flattenChildren(slots.default?.(), 'WxTabPane')
      return h('div', { class: ['weui-tabs'], style: tabsSyl.value }, [
        h(TabNav, {
          items: getPanes(children),
          currentIndex: currentIndex.value,
          tabClass: props.tabClass,
          tabStyle: props.tabStyle,
          lineWidth: props.lineWidth,
          scrollThreshold: props.scrollThreshold,
          onTabClick: (index: string | number | undefined, mode: string) => {
            transitionName.value = mode ?? ''
            currentIndex.value = index
            emit('update:modelValue', index)
            emit('change', index)
          }
        }),
        h(
          'div',
          {
            class: ['weui-tabs__pane']
          },
          props.animation
            ? h(
                TransitionGroup,
                {
                  name: transitionName.value
                },
                { default: () => getChildren(children) }
              )
            : slots.default?.()
        )
      ])
    }
  }
})
