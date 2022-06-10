<template>
  <div
    :class="[
      'weui-cell',
      {
        'weui-cell_access': access,
        'weui-cell_indent': icon && !$slots.icon
      }
    ]"
    @click="handleClick"
  >
    <div v-if="icon || $slots.icon" class="weui-cell__hd">
      <slot name="icon">
        <img :src="icon" alt="" />
      </slot>
    </div>
    <div class="weui-cell__bd">
      <slot>{{ title }}</slot>
    </div>
    <div class="weui-cell__ft">
      <slot name="desc">{{ desc }}</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { listItemProps } from './types'

export default defineComponent({
  name: 'WxListItem',
  props: listItemProps,
  emits: ['click'],
  setup(_, { emit }) {
    const handleClick = (event: Event): void => {
      emit('click', event)
    }

    return {
      handleClick
    }
  }
})
</script>
