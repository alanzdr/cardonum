import React, { useCallback, useRef } from 'react'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'

import classNames from 'classnames'

interface Props {
  isOpened: boolean,
  keepInView?: boolean,
  onClose: () => void
  children: React.ReactNode
}

const PopupDialog: React.FC<Props> = ({
  children,
  isOpened,
  keepInView = false,
  onClose
}) => {
  const boxRef = useRef<HTMLDivElement>(null)

  const onClickOutSide = useCallback(
    (ev: React.MouseEvent<HTMLDivElement>) => {
      ev.stopPropagation()
      const contentBox = boxRef.current?.firstChild
      if (contentBox && !contentBox.contains(ev.target as Node)) {
        onClose()
      }
    },
    [onClose]
  )

  return (
    <div
      
      className={classNames('fixed flex z-50 justify-center items-center w-full h-screen top-0 left-0 bg-gray/75 p-6 overflow-auto transition-opacity duration-300 ease-out', {
        'opacity-0 pointer-events-none': !isOpened,
        'opacity-100 pointer-events-auto cursor-pointer': isOpened
      })}
      onClick={onClickOutSide}
    >
      <div ref={boxRef} className={classNames('w-full origin-center transition-transform duration-300 ease-out flex items-center justify-center', {
        "scale-75": !isOpened,
        "scale-100": isOpened
      })}>
        {isOpened || keepInView ? children : null}
      </div>
      <button
        className="absolute top-2 right-2 p-2 text-white hover:text-primary transition-colors duration-300 ease-out"
        aria-label="Fechar"
        onClick={onClose}
      >
        <CloseIcon width={24} height={24} />
      </button>
    </div>
  )
}

export default PopupDialog