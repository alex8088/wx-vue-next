<script setup lang="ts">
import IconGithub from './icons/IconGithub.vue'

interface Props {
  title?: string
  desc?: string
  gray?: boolean
  foot?: boolean
  spacing?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  gray: true,
  foot: true
})
</script>

<template>
  <div :class="['page', { page_gray: props.gray }]">
    <div class="page__hd">
      <slot name="header">
        <p v-if="title" class="page__title">{{ title }}</p>
        <p v-if="desc" class="page__desc">{{ desc }}</p>
      </slot>
    </div>
    <div :class="['page__bd', { 'page__bd-spacing': props.spacing }]">
      <slot />
    </div>
    <div v-if="foot" class="page__ft">
      <a href="https://github.com/alex8088/wx-vue-next">
        <IconGithub class="icon" />
      </a>
    </div>
  </div>
</template>

<style lang="less">
.page {
  flex: 1;
  display: flex;
  flex-direction: column;
  color: var(--weui-FG-0);

  &__hd {
    padding: 40px;
  }

  &__title {
    font-size: 20px;
    margin-bottom: 4px;
  }

  &__desc {
    font-size: 14px;
    color: var(--weui-FG-1);
  }

  &__bd {
    flex: 1;

    &-spacing {
      padding: 0 16px;
    }
  }

  &__ft {
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-bottom: 20px;
    color: var(--weui-FG-4);

    .icon {
      display: block;
      height: 20px;
      width: 20px;
      fill: var(--weui-FG-4);
    }
  }
}

.page_gray {
  background-color: var(--weui-BG-0);

  .weui-loadmore_line .weui-loadmore__tips {
    background-color: var(--weui-BG-0);
  }
}
</style>
