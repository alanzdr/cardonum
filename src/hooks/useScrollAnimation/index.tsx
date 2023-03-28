import { MotionProps, useAnimation, useInView } from 'framer-motion'
import { RefObject, useCallback, useEffect, useRef } from 'react'

import { getTransition } from 'utils/animation'

const useScrollAnimation = () => {
  const controls = useAnimation()
  const reference = useRef<HTMLDivElement>(null)
  const isInView = useInView(reference as unknown as RefObject<Element>, {
    margin: '0px 0px -25% 0px',
    once: true,
  })

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [controls, isInView])

  const topDownShowAnimation = useCallback(
    (delay = 0): MotionProps => {
      return {
        initial: 'hidden',
        animate: controls,
        variants: {
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        },
        transition: getTransition({ delay }),
      }
    },
    [controls]
  )

  const leftRightShowAnimation = useCallback(
    (delay = 0): MotionProps => {
      return {
        initial: 'hidden',
        animate: controls,
        variants: {
          hidden: { opacity: 0, x: -80 },
          visible: { opacity: 1, x: 0 },
        },
        transition: getTransition({ delay }),
      }
    },
    [controls]
  )

  return {
    animationRef: reference,
    controls,
    alreadyInView: isInView,
    topDownShowAnimation,
    leftRightShowAnimation
  }
}

export default useScrollAnimation
