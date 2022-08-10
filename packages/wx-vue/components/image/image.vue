<template>
  <div :class="cls" :style="syl">
    <img
      ref="imgRef"
      :loading="imgLoading"
      class="weui-image__inner"
      :style="syl"
      :alt="alt"
      v-bind="$attrs"
      @load="onLoad"
      @error="onError"
    />
    <div v-if="!isLoaded" class="weui-image__wrapper">
      <slot v-if="isLoading" name="loading">
        <ImageIcon />
      </slot>
      <slot v-if="isError" name="error">
        <ImageIcon />
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  watch,
  ref,
  onMounted,
  type CSSProperties
} from 'vue'
import { imageProps } from './props'
import { useImageLoader, useLazyLoad } from './hooks'
import ImageIcon from './image-icon.vue'
import { toUnit } from '../utils'

export default defineComponent({
  name: 'WxImage',
  components: {
    ImageIcon
  },
  inheritAttrs: false,
  props: imageProps,
  emits: ['load', 'error'],
  setup(props, { emit }) {
    const imgRef = ref<HTMLImageElement>()
    const supportImageLoading = 'loading' in HTMLImageElement.prototype
    const imgLoading = ref<string | undefined>()

    const { isLoading, isLoaded, isError, setLoad } = useImageLoader()

    if (props.lazy) {
      if (supportImageLoading) {
        imgLoading.value = 'lazy'
      } else {
        useLazyLoad(imgRef, () => {
          loadImage(props.src)
        })
      }
    }

    const cls = computed(() => [
      'weui-image',
      { 'weui-image_loaded': isLoaded.value }
    ])

    const syl = computed<CSSProperties>(() => ({
      width: toUnit(props.width),
      height: toUnit(props.height)
    }))

    const loadImage = (src?: string): void => {
      if (src) {
        imgRef.value!.src = src
        setLoad('loading')
      }
    }

    const onLoad = (e: Event): void => {
      setLoad('loaded')
      emit('load', e)
    }

    const onError = (e: Event): void => {
      setLoad('error')
      emit('error', e)
    }

    watch(
      () => props.src,
      (val) => {
        if (isLoaded || !props.lazy) {
          loadImage(val)
        }
      }
    )

    onMounted(() => {
      if (!props.lazy || supportImageLoading) {
        loadImage(props.src)
      }
    })

    return {
      cls,
      syl,
      imgRef,
      imgLoading,
      isLoading,
      isLoaded,
      isError,
      onLoad,
      onError
    }
  }
})
</script>
