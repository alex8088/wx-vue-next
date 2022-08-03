import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  nextTick,
  h,
  onMounted
} from 'vue'
import type { CSSProperties, VNode } from 'vue'
import type { TabPane } from './types'
import { tabNavProps } from './props'
import { toUnit } from '../utils'

type Line = {
  offsetLeft: number
  width: string
  transitionDuration: number
}

export default defineComponent({
  name: 'WxTabNav',
  props: tabNavProps,
  emits: ['tabClick'],
  setup(props, { emit }) {
    const barRef = ref<HTMLElement>()

    const scrollable = computed<boolean>(
      () => props.items.length > props.scrollThreshold!
    )

    const line = reactive<Line>({
      offsetLeft: 0,
      width: '0px',
      transitionDuration: 0
    })

    const lineSyl = computed<CSSProperties>(() => {
      return {
        width: line.width,
        transform: `translateX(${line.offsetLeft}px) translateX(-50%)`,
        transition: `${line.transitionDuration}s cubic-bezier(.645,.045,.355,1)`
      }
    })

    const indexList = computed<(string | number)[]>(() => {
      return props.items.map((item) => item.index!)
    })

    const getCurrentTab = (): HTMLElement | undefined | null => {
      return barRef.value?.querySelector<HTMLElement>('.weui-tab__item_on')
    }

    let transitionDuration = 0

    const setLine = (): void => {
      nextTick(() => {
        const $el = getCurrentTab()
        if ($el) {
          const width = $el.offsetWidth / 2
          line.width = toUnit(props.lineWidth) || `${width}px`
          line.offsetLeft = $el.offsetLeft + width
          if (transitionDuration === 0) {
            transitionDuration = 0.3
          } else {
            line.transitionDuration = transitionDuration
          }
        }
      })
    }

    const scrollToActiveTab = (): void => {
      if (!scrollable.value) return
      nextTick(() => {
        const $el = getCurrentTab()
        if ($el) {
          const $bar = barRef.value!
          let count = 0
          const duration = 15
          const from = $bar.scrollLeft
          const to = $el.offsetLeft - ($bar.offsetWidth - $el.offsetWidth) / 2
          const raf = (): void => {
            $bar.scrollLeft += (to - from) / duration
            if (++count < duration) window.requestAnimationFrame(raf)
          }
          raf()
        }
      })
    }

    const index = ref<number>(0)

    const handleTabClick = (pane: TabPane): void => {
      if (pane.disabled) return
      const _index = indexList.value.indexOf(pane.index!)
      if (index.value === _index) return
      const mode = index.value > _index ? 'back' : 'forward'
      index.value = _index
      emit('tabClick', pane.index, mode)
    }

    watch(
      () => props.currentIndex,
      (val, oldVal) => {
        if (val !== oldVal) {
          scrollToActiveTab()
          setLine()
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
      } else {
        setLine()
      }
    }

    onMounted(() => {
      setCurrentIndex()
    })

    return (): VNode =>
      h(
        'div',
        {
          class: [
            'weui-tabs__bar',
            { 'weui-tabs__bar_scrollable': scrollable.value }
          ]
        },
        h('div', { ref: barRef, class: ['weui-tabs__bar-area'] }, [
          props.items.map((item) =>
            h(
              'div',
              {
                class: [
                  'weui-tab__item',
                  { 'weui-tab__item_on': item.index === props.currentIndex },
                  { 'weui-tab__item_disabled': item.disabled },
                  props.tabClass
                ],
                style: props.tabStyle,
                onClick: () => handleTabClick(item)
              },
              item.slots.title?.() ?? item.title
            )
          ),
          h('div', { class: ['weui-tab__line'], style: lineSyl.value })
        ])
      )
  }
})
