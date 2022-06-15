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
import MessageBoxComponent from './message-box.vue'
import type {
  MessageBoxType,
  MessageBoxProps,
  MessageBoxOptions,
  MessageBoxAlertOptions,
  MessageBoxConfirmOptions,
  MessageBoxFn
} from './types'

// eslint-disable-next-line
let vm: any

const MessageBoxComponentWraper = defineComponent({
  setup(_, { expose }) {
    const visible = ref<boolean>(false)
    let props = reactive({})

    expose({
      show: (options = {}) => {
        props = options
        nextTick(() => (visible.value = true))
      }
    })

    return (): VNode =>
      h(MessageBoxComponent, {
        ...props,
        visible: visible.value,
        'onUpdate:visible': (val: boolean) => {
          visible.value = val
        }
      })
  }
})

function MessageBox(type: MessageBoxType, options: MessageBoxOptions): void {
  if (!vm) {
    const root = document.createElement('div')
    document.body.append(root)
    const app = createApp(MessageBoxComponentWraper)
    vm = app.mount(root)
  }

  const _options: Partial<Omit<MessageBoxProps, 'visible'>> & {
    onClose: (action: 0 | 1) => void
  } = {
    type,
    title: options.title,
    message: options.message,
    okButtonText: options.okButtonText || options.buttonText,
    cancelButtonText: options.cancelButtonText,
    onClose: options.callback
  }

  vm.show(_options)
}

MessageBox.alert = (options: MessageBoxAlertOptions): void =>
  MessageBox('alert', options)

MessageBox.confirm = (options: MessageBoxConfirmOptions): void =>
  MessageBox('confirm', options)

MessageBox.install = (app: App): void => {
  app.config.globalProperties.$messageBox = MessageBox
}

export const WxMessageBox = MessageBox as MessageBoxFn & Plugin

export default WxMessageBox

export type {
  MessageBoxType,
  MessageBoxProps,
  MessageBoxOptions,
  MessageBoxAlertOptions,
  MessageBoxConfirmOptions,
  MessageBoxFn
} from './types'
