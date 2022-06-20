<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'

const showAS1 = ref(false)
const showAS2 = ref(false)
const showAS3 = ref(false)
</script>

<template>
  <Page title="Action Sheet" desc="弹出式菜单" :gray="false">
    <wx-button type="light" @click="showAS1 = true">弹出菜单</wx-button>
    <wx-action-sheet
      v-model:visible="showAS1"
      title="这是一个标题，可以为一行或者两行。"
      cancel-text="取消"
    >
      <wx-action-sheet-item>示例菜单</wx-action-sheet-item>
      <wx-action-sheet-item negative>负向菜单</wx-action-sheet-item>
      <wx-action-sheet-item disabled>禁用菜单</wx-action-sheet-item>
    </wx-action-sheet>
    <wx-divider>无标题/隐藏取消菜单</wx-divider>
    <wx-button type="light" @click="showAS2 = true">自定义</wx-button>
    <wx-action-sheet v-model:visible="showAS2" hide-cancel>
      <wx-action-sheet-item>示例菜单</wx-action-sheet-item>
      <wx-action-sheet-item>示例菜单</wx-action-sheet-item>
      <wx-action-sheet-item>示例菜单</wx-action-sheet-item>
    </wx-action-sheet>
    <wx-divider>事件示例</wx-divider>
    <wx-button type="light" @click="showAS3 = true">事件示例</wx-button>
    <wx-action-sheet v-model:visible="showAS3" cancel-text="取消">
      <wx-action-sheet-item @click="$toast('got!')"
        >点击事件</wx-action-sheet-item
      >
    </wx-action-sheet>
  </Page>
</template>
