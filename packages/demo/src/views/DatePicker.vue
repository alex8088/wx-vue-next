<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'

const v1 = ref<boolean>(false)
const v2 = ref<boolean>(false)
const v3 = ref<boolean>(false)
const v4 = ref<boolean>(false)
const v5 = ref<boolean>(false)
const v6 = ref<boolean>(false)

const def = new Date(new Date().getFullYear(), 0, 1)
const end = new Date(2023, 5, 30)

const formatter = (type: string, value: number): string => {
  const u = type === 'year' ? '年' : type === 'month' ? '月' : '日'
  return `${value}${u}`
}
</script>

<template>
  <Page title="Date Picker" desc="日期选择器">
    <wx-button type="light" @click="v1 = true">基本用法</wx-button>
    <wx-date-picker
      v-model:visible="v1"
      @select="(values: number[]) => $toast(`${values[0]}-${values[1]}-${values[2]}`)"
    ></wx-date-picker>
    <br />
    <wx-button type="light" @click="v2 = true">默认值</wx-button>
    <wx-date-picker
      v-model:visible="v2"
      :default-value="def"
      title="默认值"
    ></wx-date-picker>
    <br />
    <wx-button type="light" @click="v3 = true">年月类型</wx-button>
    <wx-date-picker
      v-model:visible="v3"
      year-month
      title="年月类型"
    ></wx-date-picker>
    <br />
    <wx-button type="light" @click="v4 = true">格式化选项</wx-button>
    <wx-date-picker
      v-model:visible="v4"
      title="格式化选项"
      :formatter="formatter"
    ></wx-date-picker>
    <br />
    <wx-button type="light" @click="v5 = true">选取范围</wx-button>
    <wx-date-picker
      v-model:visible="v5"
      title="选取范围"
      :start="2021"
      :end="end"
    ></wx-date-picker>
    <br />
    <wx-button type="light" @click="v6 = true">过滤选项</wx-button>
    <wx-date-picker
      v-model:visible="v6"
      title="过滤选项"
      subtitle="cron 表达式: * * 0,6 (周末)"
      cron="* * 0,6"
    ></wx-date-picker>
  </Page>
</template>
