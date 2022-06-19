<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'

const n1 = ref<number>(2)
const n2 = ref<number>(3)
const n3 = ref<number>(0)
const n4 = ref<number>(1)
const n5 = ref<number>(3)
const n6 = ref<number>(4)
const n7 = ref<number>(2)

const texts = ['非常差', '不满意', '一般', '满意', '非常满意']
</script>

<template>
  <Page title="Rate" desc="评分" spacing>
    <wx-rate v-model="n1"></wx-rate>
    <wx-divider>尺寸</wx-divider>
    <wx-rate v-model="n2" :size="32"></wx-rate>
    <wx-divider>数量</wx-divider>
    <wx-rate v-model="n3" :count="7"></wx-rate>
    <wx-divider>颜色</wx-divider>
    <wx-rate v-model="n4" color="#ee0a24"></wx-rate>
    <wx-divider>禁用</wx-divider>
    <wx-rate v-model="n5" disabled></wx-rate>
    <wx-divider>辅助描述</wx-divider>
    <wx-rate v-model="n6" label="评分" :texts="texts"></wx-rate>
    <wx-divider>change 事件，当前值：{{ n7 }}</wx-divider>
    <wx-rate v-model="n7" @change="(v) => $toast(`当前值：${v}`)"></wx-rate>
  </Page>
</template>
