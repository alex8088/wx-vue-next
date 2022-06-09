<template>
  <transition name="collapse-transition" v-on="on">
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'WxCollapseTransition',
  setup() {
    const on = {
      beforeEnter(el: HTMLDivElement): void {
        el.style.maxHeight = '0'
      },
      enter(el: HTMLDivElement): void {
        el.style.maxHeight = `${el.scrollHeight}px`
      },
      afterEnter(el: HTMLDivElement): void {
        el.style.maxHeight = ''
      },
      beforeLeave(el: HTMLDivElement): void {
        el.style.maxHeight = `${el.scrollHeight}px`
      },
      leave(el: HTMLDivElement): void {
        el.style.maxHeight = '0'
      },
      afterLeave(el: HTMLDivElement): void {
        el.style.maxHeight = ''
      }
    }

    return {
      on
    }
  }
})
</script>
