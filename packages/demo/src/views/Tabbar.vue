<script setup lang="ts">
import { ref } from 'vue'
import IconHome from '../components/icons/IconHome.vue'
import IconHomeFill from '../components/icons/IconHomeFill.vue'

const index = ref<number>(0)
const content = ['首页', '会员', '发现', '我的']
</script>

<template>
  <div class="tabbar-container">
    <div class="tabbar-pane">{{ content[index] }}</div>
    <wx-tabbar v-model="index">
      <wx-tabbar-item label="首页">
        <template #icon="slotProps">
          <wx-badge :content="8">
            <IconHome v-if="!slotProps.active" class="tabbar-icon" />
            <IconHomeFill v-else class="tabbar-icon" />
          </wx-badge>
        </template>
      </wx-tabbar-item>
      <wx-tabbar-item label="会员">
        <template #icon>
          <IconHome class="tabbar-icon" />
        </template>
      </wx-tabbar-item>
      <wx-tabbar-item label="发现">
        <template #icon>
          <wx-badge dot><IconHome class="tabbar-icon" /></wx-badge>
        </template>
      </wx-tabbar-item>
      <wx-tabbar-item label="我的">
        <template #icon>
          <IconHome class="tabbar-icon" />
        </template>
      </wx-tabbar-item>
    </wx-tabbar>
  </div>
</template>

<style lang="less">
.tabbar-container {
  display: flex;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  background-color: var(--weui-BG-0);
}
.tabbar-pane {
  flex: 1;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tabbar-icon {
  height: 24px;
  width: 24px;
}
</style>
