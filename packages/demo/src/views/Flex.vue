<script setup lang="ts">
import Page from '../components/Page.vue'
</script>

<template>
  <Page title="Flex" desc="Flex 布局" spacing>
    <wx-flex v-for="i in 4" :key="i">
      <wx-flex-item v-for="j in i" :key="i + j" class="placeholder">
        wx
      </wx-flex-item>
    </wx-flex>
    <wx-flex>
      <div class="placeholder">wx</div>
      <wx-flex-item class="placeholder">wx</wx-flex-item>
      <div class="placeholder">wx</div>
    </wx-flex>
  </Page>
</template>

<style lang="less">
.placeholder {
  margin: 5px;
  padding: 0 10px;
  background-color: var(--weui-BG-1);
  height: 2.3em;
  line-height: 2.3;
  text-align: center;
  color: var(--weui-FG-1);
}
</style>
