import { type Ref, unref, watch, onUnmounted } from 'vue'
import { noop } from '../utils'

export function useEventListener(
  target: Ref<HTMLElement | Window | undefined>,
  event: string,
  listener: EventListener,
  options: boolean | AddEventListenerOptions
): void {
  let cleanup = noop

  watch(
    () => unref(target),
    (el) => {
      cleanup()
      if (!el) return

      el.addEventListener(event, listener, options)

      cleanup = (): void => {
        el.removeEventListener(event, listener, options)
        cleanup = noop
      }
    },
    { immediate: true, flush: 'post' }
  )

  onUnmounted(cleanup)
}
