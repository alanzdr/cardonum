import { useCallback } from 'react'

/**
 * Example usage:
 * import useScrollPosition from '~/helpers/use-scroll-position'
 * const { onScroll } = useScrollPosition()
 * useEffect(() => {
 *   return onScroll((scrollPosition) => doSomething(scrollPosition))
 * }, [onScroll])
 */

// eslint-disable-next-line no-unused-vars
type OnScrollCallback = (scrollPosition: number) => void

const useScrollPosition = () => {
  const getScrollPosition = useCallback(() => {
    return window.scrollY === undefined ? window.pageYOffset : window.scrollY
  }, [])

  const onScroll = useCallback(
    (callback: OnScrollCallback) => {
      const updatePosition = () => {
        callback(getScrollPosition())
      }
      window.addEventListener('scroll', updatePosition)
      return () => window.removeEventListener('scroll', updatePosition)
    },
    [getScrollPosition]
  )

  return {
    onScroll,
    getScrollPosition,
  }
}

export default useScrollPosition
