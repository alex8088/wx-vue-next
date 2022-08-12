<script setup lang="ts">
import Page from '../components/Page.vue'

const colors = [
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indego',
  'purple',
  'cyan',
  'magenta',
  'gray'
]

const cutomColors = [
  '#fa5151',
  '#fa9d3b',
  '#ffc300',
  '#06ae56',
  '#10aeff',
  '#1485ee',
  '#6467f0',
  '#14c9c9',
  '#f5319d',
  '#86909c'
]
</script>

<template>
  <Page title="Tag" desc="标签" :gray="false" spacing>
    <wx-divider>基本用法</wx-divider>
    <wx-tag>Tag</wx-tag>
    <wx-tag v-for="(color, index) in colors" :key="index" :color="color">
      Tag
    </wx-tag>
    <wx-divider>大小</wx-divider>
    <wx-tag color="green" size="small">Tag</wx-tag>
    <wx-tag color="orange" size="medium">Tag</wx-tag>
    <wx-tag color="blue" size="large">Tag</wx-tag>
    <wx-divider>边框</wx-divider>
    <wx-tag color="green" bordered>Tag</wx-tag>
    <wx-tag color="orange" bordered>Tag</wx-tag>
    <wx-tag color="blue" bordered>Tag</wx-tag>
    <wx-divider>圆角</wx-divider>
    <wx-tag color="green" round bordered>Tag</wx-tag>
    <wx-tag color="orange" round bordered>Tag</wx-tag>
    <wx-tag color="blue" round bordered>Tag</wx-tag>
    <wx-divider>自定义</wx-divider>
    <wx-tag v-for="(color, index) in cutomColors" :key="index" :color="color">
      {{ color }}
    </wx-tag>
    <wx-divider>可关闭</wx-divider>
    <wx-tag color="green" closeable @close="$toast('Tag close')">Tag</wx-tag>
    <wx-tag color="orange" closeable bordered @close="$toast('Tag close')">
      Tag
    </wx-tag>
    <wx-tag color="blue" closeable size="large" @close="$toast('Tag close')">
      Tag
    </wx-tag>
  </Page>
</template>

<style lang="less" scoped>
.weui-tag {
  margin: 10px;
}
</style>
