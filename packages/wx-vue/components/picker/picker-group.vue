<template>
  <div
    ref="groupRef"
    class="weui-picker__group"
    role="listbox"
    tabindex="0"
    @touchstart="handleTouchStart"
    @touchmove.prevent="handleTouchMove"
    @touchend="handleTouchEnd"
    @mouseleave.stop.prevent="handleMouseLeave"
  >
    <div class="weui-picker__mask"></div>
    <div class="weui-picker__indicator"></div>
    <div class="weui-picker__content" :style="contentSyl">
      <div
        v-for="(item, index) in options"
        :key="`${item.value}-${index}`"
        role="option"
        tabindex="0"
        :class="[
          'weui-picker__item',
          { 'weui-picker__item_disabled': item.disabled }
        ]"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  ref,
  watch,
  type CSSProperties
} from 'vue'
import { pickerGroupProps } from './types'
import { error } from '../utils'

/**
 * @see https://github.com/Tencent/weui.js/blob/master/src/picker/scroll.js
 */
export default defineComponent({
  name: 'WxPickerGroup',
  props: pickerGroupProps,
  emits: ['change'],
  setup(props, { emit }) {
    const groupRef = ref<HTMLDivElement>()

    const rowHeight = 48
    const contentHeight = 5 * rowHeight
    const offset = 2

    const contentSyl = computed<CSSProperties>(() => {
      return {
        transition: `all ${_transitionDuration.value}s`,
        '-webkit-transition': `all ${_transitionDuration.value}s`,
        transform: `translate3d(0, ${_translateY.value}px, 0)`,
        '-webkit-transform': `translate3d(0, ${_translateY.value}px, 0)`
      }
    })

    const _transitionDuration = ref<number>(0)
    const _translateY = ref<number>(0)
    const setTransition = (duration: number, translateY: number): void => {
      _transitionDuration.value = duration
      _translateY.value = translateY
    }

    const maxTranslateY = computed<number>(() => rowHeight * offset)

    const minTranslateY = computed<number>(() => {
      return -(rowHeight * (props.options.length - offset - 1))
    })

    const selectedIndex = ref<number>()

    const setIndex = (): void => {
      let index = props.options.findIndex(
        (item) => item.value === props.defaultValue
      )
      if (index < 0) {
        let current = Math.floor(props.options.length / 2)
        let count = 0
        while (props.options[current]?.disabled) {
          current = ++current % props.options.length
          count++

          if (count > props.options.length) {
            error('WxPicker', 'No selectable option.')
          }
        }

        index = current
      }

      selectedIndex.value = index
      setTransition(0, (offset - selectedIndex.value) * rowHeight)
      emitEvent()
    }

    const emitEvent = (): void => {
      emit('change', props.options[selectedIndex.value!], props.level)
    }

    watch(
      () => [props.options, props.defaultValue],
      () => {
        setIndex()
      },
      { immediate: true, flush: 'post' }
    )

    const scroll = reactive<{
      translateY?: number
      startTime?: number
      start?: number
      end?: number
      points: { time: number; y: number }[]
    }>({ points: [] })

    const timeSpan = (): number => +new Date()

    const stop = (diff: number): void => {
      let translateY = scroll.translateY! + diff

      translateY = Math.round(translateY / rowHeight) * rowHeight
      if (translateY > maxTranslateY.value) {
        translateY = maxTranslateY.value
      }
      if (translateY < minTranslateY.value) {
        translateY = minTranslateY.value
      }

      let index = offset - translateY / rowHeight
      while (props.options[index]?.disabled) {
        diff > 0 ? ++index : --index
      }

      setTransition(0.3, (offset - index) * rowHeight)

      if (index !== selectedIndex.value) {
        selectedIndex.value = index
        emitEvent()
      }
    }

    const _start = (y: number): void => {
      scroll.translateY = _translateY.value
      scroll.start = y
      scroll.startTime = timeSpan()
    }

    const _move = (y: number): void => {
      scroll.end = y

      const diff = scroll.translateY! + (scroll.end - scroll.start!)

      setTransition(0, diff)

      scroll.startTime = timeSpan()
      scroll.points.push({ time: scroll.startTime, y: scroll.end })
      if (scroll.points.length > 40) {
        scroll.points.shift()
      }
    }

    const _end = (y: number): void => {
      if (!scroll.start) return

      const endTime = timeSpan()
      const relativeY =
        groupRef.value!.getBoundingClientRect().top + contentHeight / 2

      const end = y

      const move = Math.abs(end - scroll.start) > 10

      if (endTime - scroll.startTime! > 100) {
        stop(move ? end - scroll.start : relativeY - end)
      } else {
        if (move) {
          const endPos = scroll.points.length - 1
          let startPos = endPos
          for (
            let i = endPos;
            i > 0 && scroll.startTime! - scroll.points[i].time < 100;
            i--
          ) {
            startPos = i
          }

          if (startPos !== endPos) {
            const ep = scroll.points[endPos]
            const sp = scroll.points[startPos]
            const t = ep.time - sp.time
            const s = ep.y - sp.y
            const v = s / t // move speed
            const diff = v * 150 + (end - scroll.start) // make it smooth, sensitivity calculation
            stop(diff)
          } else {
            stop(0)
          }
        } else {
          stop(relativeY - end)
        }
      }

      scroll.start = undefined
    }

    const handleTouchStart = (e: TouchEvent): void => {
      _start(e.changedTouches[0].pageY)
    }

    const handleTouchMove = (e: TouchEvent): void => {
      _move(e.changedTouches[0].pageY)
    }

    const handleTouchEnd = (e: TouchEvent): void => {
      _end(e.changedTouches[0].pageY)
    }

    const handleMouseLeave = (e: MouseEvent): void => {
      _end(e.pageY)
    }

    return {
      groupRef,
      contentSyl,
      handleTouchStart,
      handleTouchMove,
      handleTouchEnd,
      handleMouseLeave
    }
  }
})
</script>
