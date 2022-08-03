<template>
  <div
    v-if="mounted"
    v-show="active"
    :class="['weui-tabs__pane-content', paneCls]"
    :style="paneSyl"
  >
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, inject, watch } from 'vue'
import { tabPaneProps } from './props'
import { tabsContentKey, type TabsContent } from './content'

export default defineComponent({
  name: 'WxTabPane',
  props: tabPaneProps,
  setup(props) {
    const tabs = inject<TabsContent>(tabsContentKey)

    const active = computed<boolean>(
      () => tabs?.currentIndex.value === props.name
    )

    const mounted = computed<boolean>(
      () => !tabs?.lazyLoad || loaded.value || active.value
    )

    const loaded = ref(active.value)

    watch(active, (val) => {
      if (val) loaded.value = true
    })

    return {
      paneCls: tabs?.paneClass,
      paneSyl: tabs?.paneStyle,
      mounted,
      active
    }
  }
})
</script>
