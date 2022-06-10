<template>
  <div v-if="title" class="weui-cells__title">{{ title }}</div>
  <div class="weui-cells" v-bind="$attrs">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { listProps } from './types'

export default defineComponent({
  name: 'WxList',
  inheritAttrs: false,
  props: listProps
})
</script>
