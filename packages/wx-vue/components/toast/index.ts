import {
  createApp,
  defineComponent,
  reactive,
  h,
  ref,
  nextTick,
  type VNode,
  type App,
  type Plugin
} from 'vue'
import ToastComponent from './toast.vue'
import type { ToastFn, ToastOptions, ToastReturn, ToastProps } from './types'

// eslint-disable-next-line
let vm: any

function parseOptions(message: ToastOptions): Partial<ToastProps> {
  if (typeof message === 'string') {
    return { message }
  }
  return message
}

const ToastComponentWraper = defineComponent({
  setup(_, { expose }) {
    const visible = ref<boolean>(false)
    let props = reactive({})

    expose({
      open: (options = {}) => {
        props = options
        nextTick(() => (visible.value = true))
      },
      close: () => {
        visible.value = false
      }
    })

    return (): VNode =>
      h(ToastComponent, {
        ...props,
        visible: visible.value,
        'onUpdate:visible': (val: boolean) => {
          visible.value = val
        }
      })
  }
})

function Toast(options: ToastOptions): ToastReturn {
  if (!vm) {
    const root = document.createElement('div')
    document.body.append(root)
    const app = createApp(ToastComponentWraper)
    vm = app.mount(root)
  }

  vm.open(parseOptions(options))

  const close = (): void => {
    vm.close()
  }

  return {
    close
  }
}

const createToastFn =
  (type: 'success' | 'fail' | 'loading') =>
  (options: ToastOptions): ToastReturn =>
    Toast({ ...{ type }, ...parseOptions(options) })

Toast.success = createToastFn('success')
Toast.fail = createToastFn('fail')
Toast.loading = createToastFn('loading')

Toast.install = (app: App): void => {
  app.config.globalProperties.$toast = Toast
}

export const WxToast = Toast as ToastFn & Plugin

export default WxToast

export type {
  ToastType,
  ToastProps,
  ToastFn,
  ToastOptions,
  ToastReturn
} from './types'
