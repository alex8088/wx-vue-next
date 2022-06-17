<script setup lang="ts">
import Page from '../components/Page.vue'
</script>

<template>
  <Page title="Skeleton" desc="骨架屏" :gray="false" spacing>
    <wx-divider>基本用法</wx-divider>
    <wx-skeleton>
      <wx-skeleton-line style="width: 33%" />
      <wx-skeleton-line :row="2" />
      <wx-skeleton-line style="width: 67%" />
      <wx-skeleton-shape />
    </wx-skeleton>
    <wx-divider>图形骨架</wx-divider>
    <wx-skeleton style="text-align: center">
      <wx-skeleton-shape size="small" />
      <wx-skeleton-shape size="medium" />
      <wx-skeleton-shape size="large" />
    </wx-skeleton>
    <wx-skeleton style="text-align: center">
      <wx-skeleton-shape type="circle" size="small" />
      <wx-skeleton-shape type="circle" size="medium" />
      <wx-skeleton-shape type="circle" size="large" />
    </wx-skeleton>
    <wx-divider>动画</wx-divider>
    <wx-skeleton animation>
      <wx-skeleton-line :row="3" />
      <wx-skeleton-shape />
    </wx-skeleton>
  </Page>
</template>
