<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'

const container = ref<HTMLElement>()
</script>

<template>
  <Page title="Sticky" desc="粘性布局">
    <wx-sticky>
      <div class="sticky-bar">基本用法</div>
    </wx-sticky>
    <div class="sticky-spacing sticky-spacing-200">Placeholder</div>
    <wx-sticky :offset-top="32">
      <div class="sticky-bar">吸顶距离</div>
    </wx-sticky>
    <div class="sticky-spacing sticky-spacing-200">Placeholder</div>
    <div ref="container" style="height: 300px; border-bottom: 1px solid #ccc">
      <wx-sticky :offset-top="64" :container="container">
        <div class="sticky-bar">观察容器</div>
      </wx-sticky>
      <div style="text-align: center; margin-top: 120px">请继续滚动</div>
    </div>
    <div class="sticky-spacing sticky-spacing-700">Placeholder</div>
  </Page>
</template>

<style lang="less">
.sticky-bar {
  text-align: center;
  line-height: 32px;
  background-color: var(--weui-BRAND);
  color: var(--weui-WHITE);
}

.sticky-spacing {
  display: flex;
  align-items: center;
  justify-content: center;

  &.sticky-spacing-200 {
    height: 200px;
  }

  &.sticky-spacing-700 {
    height: 700px;
  }
}
</style>
