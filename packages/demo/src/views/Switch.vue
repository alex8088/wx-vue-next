<script setup lang="ts">
import { reactive } from 'vue'
import Page from '../components/Page.vue'

interface FormData {
  s1: boolean
  s2: number
  s3: boolean
}

const form = reactive<FormData>({
  s1: true,
  s2: 0,
  s3: true
})
</script>

<template>
  <Page :gray="false" :foot="false">
    <wx-form title="开关" :model="form">
      <wx-form-group title="通知开关">
        <wx-switch v-model="form.s1" label="接收消息通知" />
        <wx-switch
          v-if="form.s1"
          v-model="form.s2"
          :active-value="1"
          :inactive-value="0"
        >
          显示消息详情-开关值: {{ form.s2 }}
        </wx-switch>
      </wx-form-group>
      <wx-form-group title="不可用">
        <wx-switch v-model="form.s3" label="跟随系统声音" disabled />
      </wx-form-group>
    </wx-form>
  </Page>
</template>
