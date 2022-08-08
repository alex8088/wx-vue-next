<script setup lang="ts">
import { ref } from 'vue'
import Page from '../components/Page.vue'
import type { WxOverlayInstance } from 'wx-vue'

const v1 = ref<boolean>(false)
const v2 = ref<boolean>(false)

const overlayRef = ref<WxOverlayInstance>()

const handleClick = (): void => {
  overlayRef.value!.close()
}
</script>

<template>
  <Page title="Overlay" desc="遮罩层" :gray="false">
    <wx-button type="light" @click="v1 = true">显示遮罩层</wx-button>
    <br />
    <wx-button type="light" @click="v2 = true">嵌入内容</wx-button>
    <wx-overlay v-model:visible="v1"></wx-overlay>
    <wx-overlay ref="overlayRef" v-model:visible="v2" :hide-on-blur="false">
      <div class="ad">
        <div class="ad__image"></div>
        <div class="ad__opr">
          <i
            class="weui-icon-cancel"
            style="background-color: #fff"
            @click="handleClick"
          ></i>
        </div>
      </div>
    </wx-overlay>
  </Page>
</template>

<style lang="less">
.ad {
  &__image {
    width: 280px;
    height: 200px;
    border-radius: 8px;
    background-color: #4158d0;
    background-image: linear-gradient(
      43deg,
      #4158d0 0%,
      #c850c0 46%,
      #ffcc70 100%
    );
  }

  &__opr {
    text-align: center;
    margin-top: 10px;
  }
}
</style>
