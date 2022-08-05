<template>
  <div ref="avatarRef" :class="cls" :style="syl">
    <span ref="innerRef" :class="innerCls" :style="innerSyl">
      <slot />
    </span>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watch,
  inject,
  nextTick,
  onMounted
} from 'vue'
import type { ComputedRef, CSSProperties } from 'vue'
import { avatarProps } from './props'
import { avatarGroupContentKey, type AvatarGroupContent } from './content'
import type { AvatarShape, AvatarSize } from './types'
import { isNumber } from '../utils'

export default defineComponent({
  name: 'WxAvatar',
  props: avatarProps,
  setup(props) {
    const avatarRef = ref<HTMLElement>()
    const innerRef = ref<HTMLElement>()

    const aGroup = inject<AvatarGroupContent | undefined>(
      avatarGroupContentKey,
      undefined
    )

    const shape: ComputedRef<AvatarShape> = computed(
      () => aGroup?.shape.value ?? props.shape
    )
    const size: ComputedRef<AvatarSize> = computed(
      () => aGroup?.size.value ?? props.size
    )

    const scale = ref<number>(1)
    const isImg = ref<boolean>(false)

    const setScale = (): void => {
      if (isImg.value) return
      nextTick(() => {
        if (!avatarRef.value || !innerRef.value) {
          return
        }
        const avatarWidth = avatarRef.value.offsetWidth
        const avatarHeight = avatarRef.value.offsetHeight
        const childWidth = innerRef.value.offsetWidth
        const childHeight = innerRef.value.offsetHeight
        const _scale = Math.min(
          avatarWidth / (childWidth + 8),
          avatarHeight / (childHeight + 8)
        )
        scale.value = _scale < 1 ? _scale : 1
      })
    }

    const cls = computed(() => {
      return [
        'weui-avatar',
        `weui-avatar-${shape.value}`,
        { 'weui-avatar-lg': size.value === 'large' },
        { 'weui-avatar-md': size.value === 'medium' },
        { 'weui-avatar-sm': size.value === 'small' }
      ]
    })

    const syl = computed<CSSProperties>(() => {
      const style: CSSProperties = {}
      if (isNumber(size.value)) {
        const _size = `${size.value}px`
        style.height = _size
        style.width = _size
        style.fontSize = `${size.value / 2}px`
      }
      if (aGroup?.zIndexAscend) {
        style.zIndex = props.index
      }
      return style
    })

    const innerCls = computed(() => {
      return isImg.value ? 'weui-avatar__img' : 'weui-avatar__node'
    })

    const innerSyl = computed<CSSProperties>(() => {
      const style: CSSProperties = {}
      if (!isImg.value && scale.value < 1) {
        style.transform = `scale(${scale.value}) translateX(-50%)`
      }
      return style
    })

    onMounted(() => {
      if (innerRef.value?.firstElementChild) {
        isImg.value = innerRef.value.firstElementChild.tagName === 'IMG'
      }
      setScale()
    })

    watch(size, () => {
      setScale()
    })

    return {
      avatarRef,
      cls,
      syl,
      innerRef,
      innerCls,
      innerSyl
    }
  }
})
</script>
