<script setup lang="ts">
import Page from '../components/Page.vue'
import { WxToast } from 'wx-vue'

const handleClick = (): void => {
  WxToast({ duration: 4000, message: '4s后自动消失' })
}
</script>

<template>
  <Page title="Toast" desc="弹出式提示" :gray="false">
    <wx-button type="light" @click="$toast('文字提示')">文字提示</wx-button>
    <wx-button type="light" @click="$toast.success('提交成功')"
      >成功提示</wx-button
    >
    <wx-button type="light" @click="$toast.fail('提交失败')"
      >失败提示</wx-button
    >
    <wx-button type="light" @click="$toast.loading('加载中')"
      >加载提示</wx-button
    >
    <wx-divider>显示时长: duration</wx-divider>
    <wx-button type="light" @click="handleClick">显示4s</wx-button>
  </Page>
</template>
