<template>
  <div
    :class="['weui-tabbar__item', { 'weui-bar__item_on': active }]"
    role="tab"
    :aria-selected="active"
    @click="handleClick"
  >
    <div class="weui-tabbar__icon" aria-hidden="true">
      <slot name="icon" :active="active" />
    </div>
    <p class="weui-tabbar__label" aria-hidden="true" :style="syl">
      {{ label }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed, type CSSProperties } from 'vue'
import { tabbarItemProps, tabbarContextKey, type TabbarContext } from './types'

export default defineComponent({
  name: 'WxTabbarItem',
  props: tabbarItemProps,
  setup(props) {
    const tabbar = inject<TabbarContext>(tabbarContextKey)

    let index: number | string = ''
    if (tabbar) {
      index = tabbar.index.value += 1
    }

    const active = computed<boolean>(() => {
      if (tabbar) {
        return (props.name ?? index) === tabbar.activeName.value
      } else {
        return false
      }
    })

    const syl = computed<CSSProperties>(() => {
      const style: CSSProperties = {}

      if (tabbar && active.value) {
        style.color = tabbar.activeColor
      }

      return style
    })

    const handleClick = (): void => {
      if (tabbar) {
        tabbar.activeName.value = props.name ?? index
      }
    }

    return {
      syl,
      active,
      handleClick
    }
  }
})
</script>
