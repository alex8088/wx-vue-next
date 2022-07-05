<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'

const s1 = ref<number>(40)
const s2 = ref<number>(25)
const s3 = ref<number>(0)
const s4 = ref<number>(6)
const s5 = ref<number>(0.15)
</script>

<template>
  <Page title="Slider" desc="滑块" spacing>
    <wx-slider v-model="s1"></wx-slider>
    <wx-divider>显示数值</wx-divider>
    <wx-slider v-model="s2" show-value></wx-slider>
    <wx-divider>步长</wx-divider>
    <wx-slider v-model="s3" :step="5" show-value></wx-slider>
    <wx-divider>最小值/最大值</wx-divider>
    <wx-slider v-model="s4" :min="0" :max="20" show-value></wx-slider>
    <wx-slider
      v-model="s5"
      :min="0"
      :max="1"
      :step="0.01"
      show-value
    ></wx-slider>
    <wx-divider>禁用</wx-divider>
    <wx-slider disabled></wx-slider>
  </Page>
</template>
