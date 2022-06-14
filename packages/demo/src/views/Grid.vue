<script setup lang="ts">
import Page from '../components/Page.vue'
import IconPicture from '../components/icons/IconPicture.vue'
</script>

<template>
  <Page title="Grid" desc="九宫格" class="grid">
    <wx-grid>
      <wx-grid-item v-for="i in 6" :key="i" :label="`Grid ${i}`">
        <template #icon><IconPicture /></template>
      </wx-grid-item>
    </wx-grid>
    <wx-divider>自定义-cols</wx-divider>
    <wx-grid :cols="2">
      <wx-grid-item v-for="i in 4" :key="i" :label="`Grid ${i}`">
        <template #icon><IconPicture /></template>
      </wx-grid-item>
    </wx-grid>
  </Page>
</template>

<style lang="less">
.grid {
  .weui-grids {
    background-color: var(--weui-BG-2);
    margin: 0 16px;
  }
}
</style>
