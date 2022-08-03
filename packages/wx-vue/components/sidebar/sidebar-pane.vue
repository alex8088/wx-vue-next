<template>
  <div
    v-if="mounted"
    v-show="active"
    :class="['weui-sidebar__pane-content', paneCls]"
    :style="paneSyl"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject, watch } from 'vue'
import { sidebarPaneProps } from './props'
import { sidebarContentKey, type SidebarContent } from './content'

export default defineComponent({
  name: 'WxSidebarPane',
  props: sidebarPaneProps,
  setup(props) {
    const sidebar = inject<SidebarContent>(sidebarContentKey)

    const active = computed<boolean>(
      () => sidebar?.currentIndex.value === props.name
    )

    const mounted = computed<boolean>(
      () => !sidebar?.lazyLoad || loaded.value || active.value
    )

    const loaded = ref(active.value)

    watch(active, (val) => {
      if (val) loaded.value = true
    })

    return {
      paneCls: sidebar?.paneClass,
      paneSyl: sidebar?.paneStyle,
      mounted,
      active
    }
  }
})
</script>
