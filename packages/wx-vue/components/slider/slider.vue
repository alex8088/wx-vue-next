<template>
  <div class="weui-slider-box">
    <div class="weui-slider" @click.prevent="handleClick">
      <div ref="sliderInner" class="weui-slider__inner">
        <div
          id="sliderTrack"
          :style="sliderTrackSyl"
          class="weui-slider__track"
        ></div>
        <div
          ref="sliderHandler"
          role="slider"
          :style="sliderHandlerSyl"
          class="weui-slider__handler weui-wa-hotarea"
          @touchstart="handleTouchStart"
          @touchmove.prevent="handleTouchMove"
        ></div>
      </div>
    </div>
    <div v-if="showValue" role="alert" class="weui-slider-box__value">
      {{ modelValue }}
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  computed,
  watch,
  nextTick,
  type CSSProperties
} from 'vue'
import { sliderProps } from './types'
import { getStyle } from '../utils'

export default defineComponent({
  name: 'WxSlider',
  props: sliderProps,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const sliderInner = ref<HTMLDivElement>()
    const sliderHandler = ref<HTMLDivElement>()

    const sliderValue = ref<number>()

    const sliderTrackSyl = computed<CSSProperties>(() => {
      return { width: `${sliderValue.value}%` }
    })

    const sliderHandlerSyl = computed<CSSProperties>(() => {
      return { left: `${sliderValue.value}%` }
    })

    const precision = computed<number>(() => {
      const precisions = [props.min, props.max, props.step].map((num) => {
        return `${num}`.split('.')[1]?.length || 0
      })

      return Math.max(...precisions)
    })

    const stepWidth = computed<number>(() => {
      return (innerWidth.value * props.step) / 100
    })

    const innerWidth = computed<number>(() => {
      return sliderInner.value
        ? parseInt(getStyle(sliderInner.value, 'width') || '0')
        : 0
    })

    const innerOffsetLeft = computed<number>(() => {
      return sliderInner.value?.offsetLeft || 0
    })

    const handler = reactive<{ posLeft: number; clientX: number }>({
      posLeft: 0,
      clientX: 0
    })

    const getHandlerPos = (): number => {
      return parseFloat(getStyle(sliderHandler.value!, 'left') || '0')
    }

    const setHandler = (distance: number): void => {
      if (props.step) {
        distance = Math.round(distance / stepWidth.value) * stepWidth.value
      }

      distance = handler.posLeft + distance

      distance =
        distance < 0
          ? 0
          : distance > innerWidth.value
          ? innerWidth.value
          : distance

      const _sliderValue = Math.round((100 * distance) / innerWidth.value)

      let value = _sliderValue * (props.max - props.min) * 0.01 + props.min
      value = Math.round(value / props.step) * props.step
      value = parseFloat(value.toFixed(precision.value))

      emit('update:modelValue', value)
      emit('change', value)
    }

    const handleClick = (e: MouseEvent): void => {
      if (props.disabled) return
      handler.posLeft = getHandlerPos()
      setHandler(e.pageX - innerOffsetLeft.value - handler.posLeft)
    }

    const handleTouchStart = (e: TouchEvent): void => {
      if (props.disabled) return
      handler.posLeft = getHandlerPos()
      handler.clientX = e.changedTouches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent): void => {
      if (props.disabled) return
      nextTick(() => setHandler(e.changedTouches[0].clientX - handler.clientX))
    }

    watch(
      () => props.modelValue,
      (value, oldValue) => {
        if (value !== oldValue) {
          const _value = Math.min(
            props.max,
            Math.max(props.min, value || props.min)
          )
          sliderValue.value =
            (100 * (_value - props.min)) / (props.max - props.min)
        }
      },
      { immediate: true, flush: 'post' }
    )

    return {
      sliderInner,
      sliderHandler,
      sliderTrackSyl,
      sliderHandlerSyl,
      handleClick,
      handleTouchStart,
      handleTouchMove
    }
  }
})
</script>
