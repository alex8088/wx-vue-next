<template>
  <div :class="cls">
    <span class="weui-loadmore__tips"><slot /></span>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

export default defineComponent({
  name: 'WxDivider',
  setup(_, { slots }) {
    const cls = computed(() => [
      'weui-loadmore',
      'weui-loadmore_line',
      {
        'weui-loadmore_dot': !!slots.default
      }
    ])

    return {
      cls
    }
  }
})
</script>
