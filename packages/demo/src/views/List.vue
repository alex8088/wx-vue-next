<script setup lang="ts">
import Page from '../components/Page.vue'
import IconPicture from '../components/icons/IconPicture.vue'
</script>

<template>
  <Page title="List" desc="列表">
    <wx-list title="带说明列表项">
      <wx-list-item v-for="i in 2" :key="i" title="标题文字" desc="说明文字">
      </wx-list-item>
    </wx-list>
    <wx-list title="带图标、说明列表项">
      <wx-list-item
        v-for="i in 2"
        :key="i"
        title="标题文字"
        desc="说明文字"
        access
      >
        <template #icon><IconPicture /></template>
      </wx-list-item>
    </wx-list>
    <wx-list title="带副标题列表项">
      <wx-list-item title="标题文字" subtitle="副标题" access></wx-list-item>
    </wx-list>
    <wx-list title="带链接、事件列表项">
      <wx-list-item
        title="标题文字"
        desc="说明文字"
        access
        @click="$toast('点击事件')"
      >
      </wx-list-item>
    </wx-list>
  </Page>
</template>
