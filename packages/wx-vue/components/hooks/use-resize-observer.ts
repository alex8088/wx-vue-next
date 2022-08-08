import { watch, unref, onUnmounted, type Ref } from 'vue'

export const useResizeObserver = (
  target: Ref<HTMLElement | undefined>,
  callback: ResizeObserverCallback,
  options: ResizeObserverOptions = {}
): void => {
  const isSupported = window && 'ResizeObserver' in window

  let observer: ResizeObserver | undefined

  const cleanup = (): void => {
    if (observer) {
      observer.disconnect()
      observer = undefined
    }
  }

  const unwatch = watch(
    () => unref(target),
    (el) => {
      cleanup()

      if (isSupported && el) {
        observer = new ResizeObserver(callback)
        observer.observe(el, options)
      }
    },
    { immediate: true, flush: 'post' }
  )

  const stop = (): void => {
    cleanup()
    unwatch()
  }

  onUnmounted(stop)
}
