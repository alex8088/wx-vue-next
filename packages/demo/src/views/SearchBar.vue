<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'

const searchVal1 = ref<string>('')
const searchVal2 = ref<string>('')
</script>

<template>
  <Page title="Search Bar" desc="搜索栏" spacing>
    <wx-search-bar v-model="searchVal1"></wx-search-bar>
    <wx-divider>显示取消操作</wx-divider>
    <wx-search-bar
      v-model="searchVal2"
      placeholder="搜索"
      show-cancel
      cancel-text="取消"
    ></wx-search-bar>
  </Page>
</template>
