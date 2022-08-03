<script setup lang="ts">
import Page from '../components/Page.vue'

const content =
  'Dolor magnam expedita ex beatae maiores assumenda Sint eos saepe magnam error aut Doloremque necessitatibus eligendi quod fuga debitis. Error ad optio repellendus amet.'
</script>

<template>
  <Page title="Collapse" desc="折叠面板">
    <wx-divider>基本用法</wx-divider>
    <WxCollapse>
      <WxCollapseItem v-for="i in 4" :key="i" :title="`标题${i}`">
        {{ content }}
      </WxCollapseItem>
    </WxCollapse>
    <wx-divider>手风琴</wx-divider>
    <WxCollapse accordion>
      <WxCollapseItem v-for="i in 4" :key="i" :title="`标题${i}`">
        {{ content }}
      </WxCollapseItem>
    </WxCollapse>
    <wx-divider>禁用</wx-divider>
    <WxCollapse accordion>
      <WxCollapseItem
        v-for="i in 4"
        :key="i"
        :title="`标题${i}`"
        :disabled="i === 3"
      >
        {{ content }}
      </WxCollapseItem>
    </WxCollapse>
    <wx-divider>自定义标题</wx-divider>
    <WxCollapse>
      <WxCollapseItem>
        <template #title>
          标题
          <wx-badge content="new" style="margin-left: 6px" />
        </template>
        {{ content }}
      </WxCollapseItem>
      <WxCollapseItem title="标题">
        {{ content }}
      </WxCollapseItem>
    </WxCollapse>
  </Page>
</template>
