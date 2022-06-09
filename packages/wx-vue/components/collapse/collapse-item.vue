<template>
  <div
    :class="[
      'weui-collapse__item',
      {
        'weui-collapse__item-expanded': expanded,
        'weui-collapse__item-disabled': disabled
      }
    ]"
  >
    <div
      class="weui-collapse__hd"
      role="tab"
      :aria-expanded="expanded"
      :aria-disabled="disabled"
      @click="handleClick"
    >
      <slot name="header">
        <p class="weui-collapse__title">{{ title }}</p>
      </slot>
    </div>
    <collapse-transition>
      <div v-if="expanded" class="weui-collapse__bd">
        <div class="weui-collapse__content"><slot /></div>
      </div>
    </collapse-transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, computed } from 'vue'
import { collapseItemProps, collapseContextKey } from './types'

import CollapseTransition from './collapse-transition.vue'

export default defineComponent({
  name: 'WxCollapseItem',
  components: { CollapseTransition },
  props: collapseItemProps,
  setup(props) {
    const collapse = inject(collapseContextKey)

    const expanded = computed(() => {
      return collapse?.activeNames.value.includes(props.name)
    })

    const handleClick = (): void => {
      if (props.disabled) return
      collapse?.handleItemClick(props.name)
    }

    return {
      expanded,
      handleClick
    }
  }
})
</script>
