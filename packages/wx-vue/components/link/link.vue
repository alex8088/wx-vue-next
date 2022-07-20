<template>
  <a class="weui-link" :href="href" @click.prevent="(e) => $emit('click', e)">
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { linkProps } from './types'

export default defineComponent({
  name: 'WxLink',
  props: linkProps,
  emits: ['click']
})
</script>
