import { ref, computed, type ComputedRef, type Ref } from 'vue'
import { useIntersectionObserver } from '../hooks'

interface ImageLoader {
  isLoading: ComputedRef<boolean>
  isLoaded: ComputedRef<boolean>
  isError: ComputedRef<boolean>
  setLoad: (status: ImageLoadStatus) => void
}

type ImageLoadStatus = 'beforeLoad' | 'loading' | 'loaded' | 'error'

export const useImageLoader = (): ImageLoader => {
  const _status = ref<ImageLoadStatus>('beforeLoad')

  const isLoading = computed<boolean>(() => _status.value === 'loading')
  const isLoaded = computed<boolean>(() => _status.value === 'loaded')
  const isError = computed<boolean>(() => _status.value === 'error')

  const setLoad = (status: ImageLoadStatus): void => {
    _status.value = status
  }

  return {
    isLoading,
    isLoaded,
    isError,
    setLoad
  }
}

type lazyLoadCallback = () => void

export const useLazyLoad = (
  target: Ref<HTMLElement | undefined>,
  callback: lazyLoadCallback
): void => {
  const _callback: IntersectionObserverCallback = (entries, observer): void => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0 || entry.isIntersecting) {
        observer.unobserve(target.value!)
        stop()
        callback()
      }
    })
  }
  const { isSupported, stop } = useIntersectionObserver(target, _callback, {
    root: document,
    rootMargin: '0px',
    threshold: 0.1
  })

  if (!isSupported) {
    callback()
  }
}
