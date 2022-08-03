<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'

let defaultIndex = ref(2)
</script>

<template>
  <Page title="Sidebar" desc="侧边导航栏" spacing>
    <wx-divider>基本用法</wx-divider>
    <wx-sidebar style="height: 250px">
      <wx-sidebar-pane v-for="i in 4" :key="i" :title="`标签${i}`" :name="i">
        内容{{ i }}
      </wx-sidebar-pane>
    </wx-sidebar>
    <wx-divider>默认标签</wx-divider>
    <wx-sidebar v-model="defaultIndex" style="height: 250px">
      <wx-sidebar-pane v-for="i in 4" :key="i" :title="`标签${i}`" :name="i">
        内容{{ i }}
      </wx-sidebar-pane>
    </wx-sidebar>
    <wx-divider>禁用</wx-divider>
    <wx-sidebar style="height: 250px">
      <wx-sidebar-pane name="first" title="标签1">内容1</wx-sidebar-pane>
      <wx-sidebar-pane name="second" title="标签2">内容2</wx-sidebar-pane>
      <wx-sidebar-pane name="third" title="标签3" disabled>
        内容3
      </wx-sidebar-pane>
      <wx-sidebar-pane name="fourth" title="标签4">内容4</wx-sidebar-pane>
    </wx-sidebar>
    <wx-divider>自定义</wx-divider>
    <wx-sidebar
      :line-width="3"
      :line-height="40"
      line-color="#409eff"
      style="height: 200px"
    >
      <wx-sidebar-pane v-for="i in 3" :key="i" :title="`标签${i}`" :name="i">
        内容{{ i }}
      </wx-sidebar-pane>
    </wx-sidebar>
    <wx-divider>自定义标签</wx-divider>
    <wx-sidebar style="height: 200px">
      <wx-sidebar-pane name="first">
        <template #title>
          标签
          <wx-badge content="hot" style="margin-left: 4px" />
        </template>
        内容1
      </wx-sidebar-pane>
      <wx-sidebar-pane name="second" title="标签2">内容2</wx-sidebar-pane>
      <wx-sidebar-pane name="third" title="标签3"> 内容3 </wx-sidebar-pane>
    </wx-sidebar>
    <wx-divider>标签栏滑动</wx-divider>
    <wx-sidebar style="height: 312px">
      <wx-sidebar-pane v-for="i in 12" :key="i" :title="`标签${i}`" :name="i">
        内容{{ i }}
      </wx-sidebar-pane>
    </wx-sidebar>
    <wx-divider>延迟渲染</wx-divider>
    <wx-sidebar lazy-load style="height: 200px">
      <wx-sidebar-pane v-for="i in 3" :key="i" :title="`标签${i}`" :name="i">
        内容{{ i }}
      </wx-sidebar-pane>
    </wx-sidebar>
  </Page>
</template>
