import { watch, unref, onUnmounted, type Ref } from 'vue'
import { noop } from '../utils'

export const useIntersectionObserver = (
  target: Ref<HTMLElement | undefined>,
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
): {
  isSupported: boolean
  stop: () => void
} => {
  const isSupported = window && 'IntersectionObserver' in window

  let observer: IntersectionObserver | undefined

  const cleanup = (): void => {
    if (observer) {
      observer.disconnect()
      observer = undefined
    }
  }

  const unwatch = isSupported
    ? watch(
        () => unref(target),
        (el) => {
          cleanup()

          if (isSupported && el) {
            observer = new IntersectionObserver(callback, options)
            observer.observe(el)
          }
        },
        { immediate: true, flush: 'post' }
      )
    : noop

  const stop = (): void => {
    cleanup()
    unwatch()
  }

  onUnmounted(stop)

  return {
    isSupported,
    stop
  }
}
