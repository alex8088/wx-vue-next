<script setup lang="ts">
import Page from '../components/Page.vue'
import { WxMessageBox, WxToast } from 'wx-vue'

const messages = [
  '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
  '按钮文本不宜太长,建议2-4个字',
  '标题文本不宜太长,建议4-6个字'
]

const showAlertMessageBox = (): void => {
  WxMessageBox.alert({
    message: messages[0],
    buttonText: '确定',
    callback: () => {}
  })
}

const showConfirmMessageBox = (): void => {
  WxMessageBox.confirm({
    message: messages[0],
    okButtonText: '确定',
    cancelButtonText: '取消',
    callback: () => {}
  })
}

const showMessageBox1 = (): void => {
  WxMessageBox.confirm({
    message: messages[1],
    okButtonText: '离开',
    cancelButtonText: '继续',
    callback: () => {}
  })
}

const showMessageBox2 = (): void => {
  WxMessageBox.confirm({
    title: '这是标题',
    message: messages[2],
    okButtonText: '确定',
    cancelButtonText: '取消',
    callback: () => {}
  })
}

const showMessageBox3 = (): void => {
  WxMessageBox.confirm({
    message: '是否提交?',
    okButtonText: '确定',
    cancelButtonText: '取消',
    callback: (action) => {
      WxToast(`${action ? '确定' : '取消'}了`)
    }
  })
}
</script>

<template>
  <Page title="Message Box" desc="消息框" :gray="false">
    <wx-divider>消息框类型</wx-divider>
    <wx-button type="light" @click="showAlertMessageBox">提示框</wx-button>
    <wx-button type="light" @click="showConfirmMessageBox">确认框</wx-button>
    <wx-divider>自定义消息框</wx-divider>
    <wx-button type="light" @click="showMessageBox1">按钮文本</wx-button>
    <wx-button type="light" @click="showMessageBox2">定义标题</wx-button>
    <wx-button type="light" @click="showMessageBox3">关闭事件</wx-button>
  </Page>
</template>
