<script setup lang="ts">
import Page from '../components/Page.vue'
</script>

<template>
  <Page title="Button" desc="按钮">
    <div class="button-spacing">
      <wx-button>默认操作</wx-button>
      <wx-button loading>默认操作</wx-button>
      <wx-button disabled>默认操作</wx-button>
      <wx-button type="light">次要操作</wx-button>
      <wx-button type="light" loading>次要操作</wx-button>
      <wx-button type="light" disabled>次要操作</wx-button>
      <wx-button type="warn">警告操作</wx-button>
      <wx-button type="warn" loading>警告操作</wx-button>
      <wx-button type="warn" disabled>警告操作</wx-button>
    </div>
    <div class="button-spacing button-inline">
      <wx-divider>mini</wx-divider>
      <wx-button mini>按钮</wx-button>
      <wx-button type="light" mini>按钮</wx-button>
      <wx-button type="warn" mini>按钮</wx-button>
    </div>
  </Page>
</template>

<style lang="less">
.button-spacing {
  margin: 15px auto;
  padding: 15px;
  text-align: center;
}
.button-inline {
  button {
    margin: 0 12px;
  }
}
</style>
