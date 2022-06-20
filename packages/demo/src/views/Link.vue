<script setup lang="ts">
import { useRouter } from 'vue-router'
import Page from '../components/Page.vue'

const router = useRouter()

const handleClick = (): void => {
  router.push({ name: 'home' })
}
</script>

<template>
  <Page title="Link" desc="链接">
    <div style="text-align: center">
      <wx-link>文本链接</wx-link>
      <wx-divider>链接事件</wx-divider>
      <wx-link @click="handleClick">返回主页</wx-link>
    </div>
  </Page>
</template>
