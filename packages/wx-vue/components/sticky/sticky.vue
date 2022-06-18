<template>
  <div ref="elRef" class="weui-sticky" :style="rootSyl">
    <div :class="[{ 'weui-sticky_fixed': state.fixed }]" :style="fixedSyl">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  onMounted,
  type CSSProperties
} from 'vue'
import { stickyProps } from './types'
import { useEventListener } from '../hooks'

export default defineComponent({
  name: 'WxSticky',
  props: stickyProps,
  setup(props) {
    const elRef = ref<HTMLElement>()
    const state = reactive({
      fixed: false,
      height: 0
    })

    const getScrollParent = (el: HTMLElement): HTMLElement | Window => {
      let node = el

      while (
        node &&
        node.tagName !== 'HTML' &&
        node.tagName !== 'BODY' &&
        node.nodeType === 1
      ) {
        const { overflowY } = window.getComputedStyle(node)

        if (/scroll|auto/i.test(overflowY)) {
          return node
        }

        node = node.parentNode as HTMLElement
      }

      return window
    }

    const scrollHandler = (): void => {
      if (!elRef.value) return

      const elTop = elRef.value.getBoundingClientRect().top
      state.height = elRef.value.offsetHeight

      const offsetTop = props.offsetTop
      const container = props.container

      if (offsetTop > elTop) {
        if (container) {
          state.fixed = !(
            offsetTop + state.height >
            elTop + container.offsetHeight
          )
        } else {
          state.fixed = true
        }
      } else {
        state.fixed = false
      }
    }

    const scrollParent = ref<HTMLElement | Window>()

    onMounted(() => {
      if (elRef.value) {
        scrollParent.value = getScrollParent(elRef.value)
      }
    })

    useEventListener(scrollParent, 'scroll', scrollHandler, {})

    const rootSyl = computed<CSSProperties>(() => {
      const style: CSSProperties = {}

      if (state.fixed) {
        style.height = `${state.height}px`
      }

      return style
    })

    const fixedSyl = computed<CSSProperties>(() => {
      const style: CSSProperties = {}

      if (state.fixed) {
        style.top = `${props.offsetTop}px`
      }

      if (props.zIndex) {
        style.zIndex = props.zIndex
      }

      return style
    })

    return {
      elRef,
      rootSyl,
      fixedSyl,
      state
    }
  }
})
</script>
