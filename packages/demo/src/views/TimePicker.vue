<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'

const v1 = ref<boolean>(false)
const v2 = ref<boolean>(false)
const v3 = ref<boolean>(false)
const v4 = ref<boolean>(false)
const v5 = ref<boolean>(false)

const formatter = (type: string, value: number): string => {
  return `${value < 10 ? `0${value}` : value}${type === 'hour' ? '时' : '分'}`
}
</script>

<template>
  <Page title="Time Picker" desc="时间选择器">
    <wx-button type="light" @click="v1 = true">基本用法</wx-button>
    <wx-time-picker
      v-model:visible="v1"
      @select="(values: number[]) => $toast(`${values[0]}:${values[1]}}`)"
    ></wx-time-picker>
    <br />
    <wx-button type="light" @click="v2 = true">默认值</wx-button>
    <wx-time-picker
      v-model:visible="v2"
      :default-value="[12, 15]"
      title="默认值"
    ></wx-time-picker>
    <br />
    <wx-button type="light" @click="v3 = true">格式化选项</wx-button>
    <wx-time-picker
      v-model:visible="v3"
      title="格式化选项"
      :formatter="formatter"
    ></wx-time-picker>
    <br />
    <wx-button type="light" @click="v4 = true">选取范围</wx-button>
    <wx-time-picker
      v-model:visible="v4"
      title="选取范围"
      :start="9"
      :end="18"
    ></wx-time-picker>
    <br />
    <wx-button type="light" @click="v5 = true">选项间隔</wx-button>
    <wx-time-picker
      v-model:visible="v5"
      title="选项间隔"
      subtitle="间隔: 1,5,10,15,20,30, 默认: 5"
      :time-span="15"
    ></wx-time-picker>
  </Page>
</template>
