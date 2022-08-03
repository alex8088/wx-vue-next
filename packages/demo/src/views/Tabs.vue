<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'
import IconPicture from '../components/icons/IconPicture.vue'

let defaultIndex = ref(2)
</script>

<template>
  <Page title="Tabs" desc="标签页" spacing>
    <wx-divider>基本用法</wx-divider>
    <wx-tabs>
      <wx-tab-pane v-for="i in 4" :key="i" :title="`标签${i}`" :name="i">
        内容{{ i }}
      </wx-tab-pane>
    </wx-tabs>
    <wx-divider>默认标签</wx-divider>
    <wx-tabs v-model="defaultIndex">
      <wx-tab-pane v-for="i in 4" :key="i" :title="`标签${i}`" :name="i">
        内容{{ i }}
      </wx-tab-pane>
    </wx-tabs>
    <wx-divider>禁用</wx-divider>
    <wx-tabs>
      <wx-tab-pane name="first" title="标签1">内容1</wx-tab-pane>
      <wx-tab-pane name="second" title="标签2">内容2</wx-tab-pane>
      <wx-tab-pane name="third" title="标签3" disabled>内容3</wx-tab-pane>
      <wx-tab-pane name="fourth" title="标签4">内容4</wx-tab-pane>
    </wx-tabs>
    <wx-divider>自定义</wx-divider>
    <wx-tabs line-height="1px" active-color="#409eff">
      <wx-tab-pane v-for="i in 4" :key="i" :title="`标签${i}`" :name="i">
        内容{{ i }}
      </wx-tab-pane>
    </wx-tabs>
    <wx-divider>图标</wx-divider>
    <wx-tabs>
      <wx-tab-pane name="first">
        <template #title><IconPicture />标签</template>
        内容1
      </wx-tab-pane>
      <wx-tab-pane name="second">
        <template #title><IconPicture />标签</template>
        内容2
      </wx-tab-pane>
      <wx-tab-pane name="third">
        <template #title><IconPicture />标签</template>
        内容3
      </wx-tab-pane>
    </wx-tabs>
    <wx-divider>标签栏滑动</wx-divider>
    <wx-tabs>
      <wx-tab-pane v-for="i in 9" :key="i" :title="`标签${i}`" :name="i">
        内容{{ i }}
      </wx-tab-pane>
    </wx-tabs>
    <wx-divider>切换动画</wx-divider>
    <wx-tabs animation>
      <wx-tab-pane v-for="i in 4" :key="i" :title="`标签${i}`" :name="i">
        内容{{ i }}
      </wx-tab-pane>
    </wx-tabs>
    <wx-divider>延迟渲染</wx-divider>
    <wx-tabs lazy-load>
      <wx-tab-pane v-for="i in 4" :key="i" :title="`标签${i}`" :name="i">
        内容{{ i }}
      </wx-tab-pane>
    </wx-tabs>
  </Page>
</template>
