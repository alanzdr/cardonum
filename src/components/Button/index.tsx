import React, { useMemo } from 'react';

import Link from 'next/link';
import classNames from 'classnames';
import { ReactComponent as Arrow } from 'assets/icons/right-arrow.svg'

interface ButtonProps
extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  component?: 'button',
  ref?: React.RefObject<HTMLButtonElement>
}

interface AnchorProps
extends React.AnchorHTMLAttributes<HTMLAnchorElement>{
  component?: 'a',
  ref?: React.RefObject<HTMLAnchorElement>
  href: string
}

interface BaseProps {
  variant?: 'filled' | 'outline',
  showArrow?: boolean
}

type Props = BaseProps & (ButtonProps | AnchorProps)

const Button: React.FC<Props> = ({
  component = 'button',
  className,
  children,
  variant = 'filled',
  showArrow = true,
  ...rest
}) => {
  const buttonClassName = useMemo(() => classNames(
    "relative h-[3.4375rem] px-6 flex items-center justify-center rounded-bubble transition-colors",
    {
      "border-[1px] border-primary text-primary hover:text-white hover:bg-primary": variant === 'outline',
      "text-white bg-gradient-to-r from-primary-dark to-primary-light hover:bg-primary hover:opacity-90 transition-opacity": variant === 'filled'
    },
    className
  ), [className, variant])

  if (component === 'button') {
    const props = rest as ButtonProps;
    return (
      <button
        className={buttonClassName}
        ref={props.ref}
        {...props}
      >
        {children}
        {showArrow && (
          <Arrow className='absolute right-6 top-1/2 -translate-y-1/2' />
        )}
      </button>
    );
  }

  if (component === 'a') {
    const props = rest as AnchorProps;
    return (
      <Link 
        className={buttonClassName}
        ref={props.ref}
        {...props}
      >
        {children}
        {showArrow && (
          <Arrow className='absolute right-6 top-1/2 -translate-y-1/2' />
        )}
      </Link>
    );
  }

  return null;
};

export default Button;
