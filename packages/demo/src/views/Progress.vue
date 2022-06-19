<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'

const p1 = ref<number>(0)
const p2 = ref<number>(0)
const s1 = ref<'success' | 'fail'>()
const s2 = ref<'success' | 'fail'>()
const c1 = ref<string>()

const handleClick = (): void => {
  const inte = setInterval(() => {
    if (p1.value < 70) {
      p1.value += 1
    } else {
      s1.value = 'fail'
      c1.value = '#fa5151'
    }
    if (p2.value < 100) {
      p2.value += 1
    } else {
      s2.value = 'success'
      clearInterval(inte)
    }
  }, 50)
}
</script>

<template>
  <Page title="Progress" desc="进度条" :gray="false" spacing>
    <wx-progress :percentage="20"></wx-progress>
    <wx-divider>宽度/颜色/不显示进度文本</wx-divider>
    <wx-progress
      :percentage="20"
      color="#10aeff"
      :stroke-width="6"
      :show-text="false"
    />
    <wx-divider>状态控制</wx-divider>
    <wx-progress :percentage="p1" :status="s1" :color="c1" />
    <wx-progress :percentage="p2" :status="s2" style="margin-top: 10px" />
    <br />
    <wx-button @click="handleClick">上传</wx-button>
  </Page>
</template>
