<template>
  <HalfScreenDialog
    v-model:visible="open"
    :title="title"
    :subtitle="subtitle"
    :hide-close-icon="hideCloseIcon"
    :close-icon-position="closeIconPosition"
  >
    <template #header>
      <slot name="header" />
    </template>
    <template #footer>
      <a
        :class="[
          'weui-btn',
          'weui-btn_primary',
          'weui-picker__btn',
          { 'weui-btn_disabled': loading }
        ]"
        role="button"
        @click="handleClick"
      >
        {{ okButtonText }}
      </a>
    </template>
    <div v-if="loading && options.length === 0" class="weui-picker__bd">
      <div class="weui-picker__group">
        <div class="weui-picker__mask"></div>
        <div class="weui-picker__indicator"></div>
        <div class="weui-picker__content">
          <div class="weui-picker__item"></div>
          <div class="weui-picker__item"></div>
          <div class="weui-picker__item">
            <span class="weui-primary-loading"
              ><i class="weui-primary-loading__dot"></i
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="weui-picker__bd">
      <PickerGroup
        v-for="(options, index) in optionsList"
        :key="index"
        :level="index"
        :options="options"
        :default-value="valueList[index]"
        @change="handleChange"
      ></PickerGroup>
    </div>
  </HalfScreenDialog>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch, type Ref } from 'vue'
import { pickerProps, type PickerOption, type PickerOptions } from './types'
import PickerGroup from './picker-group.vue'
import HalfScreenDialog from '../half-screen-dialog/half-screen-dialog.vue'
import { isDef } from '../utils'

export default defineComponent({
  name: 'WxPicker',
  components: {
    HalfScreenDialog,
    PickerGroup
  },
  props: pickerProps,
  emits: ['update:visible', 'select'],
  setup(props, { emit, expose }) {
    const isCascade = computed<boolean>(() => {
      const options = props.options
      if (options.length) {
        return !Array.isArray(options[0])
      }

      return false
    })

    const depthOf = (item: PickerOption): number => {
      let depth = 1

      if (item.children?.length) {
        depth = depthOf(item.children[0]) + 1
      }

      return depth
    }

    const depth = computed<number>(() => {
      return isCascade.value
        ? props.depth || depthOf((props.options as PickerOptions)[0])
        : props.options.length
    })

    const optionsList: Ref<PickerOptions[]> = ref([])

    const valueList = ref<(string | number | boolean)[]>([])

    const currentValue = ref<(string | number | boolean)[]>([])

    watch(
      () => props.options,
      () => {
        if (isCascade.value) {
          let list: PickerOptions[] = []
          list.push(props.options as PickerOptions)
          for (let i = 1; i < depth.value; i++) {
            list.push([])
          }
          optionsList.value = list
        } else {
          optionsList.value = props.options as PickerOptions[]
        }
      },
      { immediate: true, flush: 'post' }
    )

    watch(
      () => props.defaultValue,
      (value) => {
        if (!Array.isArray(value)) {
          if (isDef(value)) valueList.value.push(value)
        } else {
          valueList.value.push(...value)
        }
      },
      { immediate: true, flush: 'post' }
    )

    const open = computed<boolean>({
      get() {
        return props.visible
      },
      set(value) {
        emit('update:visible', value)
      }
    })

    const show = (): void => {
      open.value = true
    }

    const handleChange = (item: PickerOption, level: number): void => {
      if (item) {
        if (isCascade.value && depth.value > level + 1) {
          optionsList.value[level + 1] = item.children || []
        }

        currentValue.value[level] = item.value ?? item.label
      }
    }

    const handleClick = (): void => {
      if (props.loading) return
      open.value = false
      emit('select', currentValue.value)
    }

    expose({ show })

    return {
      open,
      optionsList,
      valueList,
      handleChange,
      handleClick
    }
  }
})
</script>
