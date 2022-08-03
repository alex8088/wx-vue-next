import { defineComponent, ref, watch, nextTick, h, onMounted } from 'vue'
import type { VNode } from 'vue'
import type { SidebarPane } from './types'
import { sidebarNavProps } from './props'

export default defineComponent({
  name: 'WxSidebarNav',
  props: sidebarNavProps,
  emits: ['tabClick'],
  setup(props, { emit }) {
    const barRef = ref<HTMLElement>()

    const scrollToActiveTab = (): void => {
      nextTick(() => {
        const $bar = barRef.value!
        if ($bar.scrollHeight > $bar.clientHeight) {
          const $el = $bar.querySelector<HTMLElement>('.weui-sidebar__item_on')
          if ($el) {
            const halfOffsetHeight = ($bar.offsetHeight - $el.offsetHeight) / 2
            let count = 0
            const duration = 15
            const from = $bar.scrollTop
            const to =
              halfOffsetHeight < $el.offsetTop
                ? $el.offsetTop - halfOffsetHeight
                : 0
            const raf = (): void => {
              $bar.scrollTop += (to - from) / duration
              if (++count < duration) window.requestAnimationFrame(raf)
            }
            raf()
          }
        }
      })
    }

    const handleTabClick = (pane: SidebarPane): void => {
      if (pane.disabled) return
      emit('tabClick', pane.index)
    }

    watch(
      () => props.currentIndex,
      (val, oldVal) => {
        if (val !== oldVal) {
          scrollToActiveTab()
        }
      }
    )

    watch(
      () => props.items.length,
      (val, oldVal) => {
        if (val !== oldVal) {
          setCurrentIndex()
        }
      }
    )

    const setCurrentIndex = (): void => {
      if (props.items.length === 0) return
      const i = props.items.findIndex(
        (item) => item.index === props.currentIndex
      )
      if (i < 0) {
        emit('tabClick', props.items[0].index)
      }
    }

    onMounted(() => {
      setCurrentIndex()
    })

    return (): VNode =>
      h('div', { ref: barRef, class: ['weui-sidebar__bar'] }, [
        props.items.map((item) =>
          h(
            'div',
            {
              class: [
                'weui-sidebar__item',
                {
                  'weui-sidebar__item_on': item.index === props.currentIndex
                },
                { 'weui-sidebar__item_disabled': item.disabled },
                props.tabClass
              ],
              style: props.tabStyle,
              onClick: () => handleTabClick(item)
            },
            item.slots.title?.() ?? item.title
          )
        )
      ])
  }
})
