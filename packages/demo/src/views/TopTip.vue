<script setup lang="ts">
import Page from '../components/Page.vue'
import { WxTopTip } from 'wx-vue'

const handleClick = (): void => {
  WxTopTip({ duration: 4000, message: '错误提示' })
}
</script>

<template>
  <Page title="TopTip" desc="顶部提示条" :gray="false">
    <wx-button type="light" @click="$topTip('错误提示')">显示提示条</wx-button>
    <wx-divider>显示时长: duration</wx-divider>
    <wx-button type="light" @click="handleClick">显示4s</wx-button>
  </Page>
</template>
