<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'
import type { PickerOptions } from 'wx-vue'

const v1 = ref<boolean>(false)
const v2 = ref<boolean>(false)
const v3 = ref<boolean>(false)
const v4 = ref<boolean>(false)

const loading = ref<boolean>(false)

const data1: PickerOptions = [
  { label: '身份证' },
  { label: '学生证' },
  { label: '军官证' },
  { label: '护照(不可选)', disabled: true },
  { label: '其他' }
]
const data2: PickerOptions[] = [
  [
    { label: '周一' },
    { label: '周二' },
    { label: '周三' },
    { label: '周四' },
    { label: '周五' }
  ],
  [
    { label: '上午' },
    { label: '下午' },
    { label: '晚上（不可选）', disabled: true }
  ]
]
const data3: PickerOptions = [
  {
    label: '广东',
    value: 0,
    children: [
      {
        label: '广州',
        value: 0,
        children: [
          {
            label: '海珠区',
            value: 0
          },
          {
            label: '番禺区',
            value: 1
          }
        ]
      },
      {
        label: '佛山',
        value: 1,
        children: [
          {
            label: '禅城区',
            value: 0
          },
          {
            label: '南海区',
            value: 1
          }
        ]
      }
    ]
  },
  {
    label: '广西',
    value: 1,
    children: [
      {
        label: '南宁',
        value: 0,
        children: [
          {
            label: '青秀区',
            value: 0
          },
          {
            label: '兴宁区',
            value: 1
          }
        ]
      },
      {
        label: '桂林',
        value: 1,
        children: [
          {
            label: '象山区',
            value: 0
          },
          {
            label: '秀峰区',
            value: 1
          }
        ]
      }
    ]
  }
]
const data4 = ref<PickerOptions>([])

const handleClick = (): void => {
  v4.value = true
  if (data4.value.length === 0) {
    loading.value = true
    setTimeout(() => {
      data4.value = data1
      loading.value = false
    }, 1000)
  }
}
</script>

<template>
  <Page title="Picker" desc="选择器">
    <wx-button type="light" @click="v1 = true">单列选择器</wx-button>
    <wx-picker
      v-model:visible="v1"
      title="单列选择器"
      :options="data1"
      ok-button-text="确定"
      @select="(v) => $toast(v[0])"
    ></wx-picker>
    <br />
    <wx-button type="light" @click="v2 = true">多列选择器</wx-button>
    <wx-picker
      v-model:visible="v2"
      title="多列选择器"
      :options="data2"
      ok-button-text="确定"
    ></wx-picker>
    <br />
    <wx-button type="light" @click="v3 = true">级联选择器</wx-button>
    <wx-picker
      v-model:visible="v3"
      :default-value="[0, 1, 0]"
      title="级联选择器"
      subtitle="可指定初始化默认值"
      :options="data3"
      ok-button-text="确定"
    ></wx-picker>
    <br />
    <wx-button type="light" @click="handleClick">异步选择器</wx-button>
    <wx-picker
      v-model:visible="v4"
      title="异步选择器"
      :loading="loading"
      :options="data4"
      ok-button-text="确定"
    ></wx-picker>
  </Page>
</template>
