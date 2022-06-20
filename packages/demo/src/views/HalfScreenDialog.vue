<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'

const showHSD1 = ref(false)
const showHSD2 = ref(false)
const showHSD3 = ref(false)
const showHSD4 = ref(false)
</script>

<template>
  <Page title="Half-screen Dialog" desc="半屏对话框">
    <wx-button type="light" @click="showHSD1 = true">基本用法</wx-button>
    <wx-divider>示例</wx-divider>
    <wx-button type="light" @click="showHSD2 = true">大屏对话框</wx-button>
    <wx-button type="light" @click="showHSD3 = true">自定义标题</wx-button>
    <wx-button type="light" @click="showHSD4 = true">自定义操作</wx-button>
    <wx-half-screen-dialog
      v-model:visible="showHSD1"
      title="标题"
      subtitle="副标题"
    >
      <div class="hs-dialog-content">自定义内容</div>
    </wx-half-screen-dialog>
    <wx-half-screen-dialog
      v-model:visible="showHSD2"
      title="标题"
      subtitle="副标题"
      large
    >
      <div class="hs-dialog-content">自定义内容</div>
    </wx-half-screen-dialog>
    <wx-half-screen-dialog v-model:visible="showHSD3" hide-close-icon>
      <template #header>
        <wx-flex style="align-items: center; font-size: 14px">
          <div class="hs-dialog-avatar"></div>
          标题
        </wx-flex>
      </template>
      <div class="hs-dialog-content">自定义内容</div>
    </wx-half-screen-dialog>
    <wx-half-screen-dialog v-model:visible="showHSD4" title="标题" large>
      <template #footer>
        <div class="weui-half-screen-dialog__btn-area">
          <wx-button type="light" @click="showHSD4 = false">取消</wx-button>
          <wx-button @click="showHSD4 = false">确定</wx-button>
        </div>
      </template>
      <div class="hs-dialog-content">自定义内容</div>
    </wx-half-screen-dialog>
  </Page>
</template>

<style lang="less">
.hs-dialog-avatar {
  height: 24px;
  width: 24px;
  background-color: var(--weui-BG-0);
  border-radius: 50%;
  margin-right: 8px;
}

.hs-dialog-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
