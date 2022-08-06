<script setup lang="ts">
import Page from '../components/Page.vue'
</script>

<template>
  <Page title="Loading" desc="加载中">
    <wx-divider>基本用法</wx-divider>
    <div class="loading-spacing">
      <wx-loading></wx-loading>
      <wx-loading type="spinner"></wx-loading>
    </div>
    <wx-divider>大小与颜色</wx-divider>
    <div class="loading-spacing">
      <wx-loading :size="28" color="#07c160"></wx-loading>
    </div>
    <wx-divider>加载文案</wx-divider>
    <div class="loading-spacing">
      <wx-loading>加载中</wx-loading>
    </div>
    <wx-divider>垂直布局</wx-divider>
    <div class="loading-spacing">
      <wx-loading layout="vertical">加载中</wx-loading>
    </div>
  </Page>
</template>

<style lang="less">
.loading-spacing {
  margin: 0 auto;
  text-align: center;

  .weui-loading-wrapper {
    margin: 0 10px;
  }
}
</style>
