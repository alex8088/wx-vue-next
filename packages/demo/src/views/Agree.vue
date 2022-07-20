<script setup lang="ts">
import { ref } from 'vue'
import type { WxAgreeInstance } from 'wx-vue'
import Page from '../components/Page.vue'

const agree = ref<boolean>(false)

const agreeRef = ref<WxAgreeInstance>()

const handleClick = (): void => {
  if (!agree.value) {
    agreeRef.value?.shake()
  }
}
</script>

<template>
  <Page title="Agree" desc="同意确认" :gray="false" spacing>
    <wx-divider>基本用法</wx-divider>
    <wx-agree label="已阅读并同意上述条款"></wx-agree>
    <wx-divider>自定义</wx-divider>
    <wx-agree>阅读并同意<wx-link>《用户协议》</wx-link></wx-agree>
    <wx-divider>提醒动画</wx-divider>
    <wx-agree ref="agreeRef" v-model="agree">
      阅读并同意
      <wx-link>《用户协议》</wx-link>
    </wx-agree>
    <br />
    <wx-button @click="handleClick">继续</wx-button>
  </Page>
</template>
