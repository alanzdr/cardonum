import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import LogoImage from 'assets/logo.svg'
import { ReactComponent as TelIcon } from 'assets/icons/cell.svg'
// import VerifyIcon from 'assets/icons/verify.svg'
import VerifyButton from 'assets/verify-button.svg'
import useScrollPosition from 'hooks/useScrollPosition';

const Header: React.FC = () => {
  const router = useRouter()
  const [isMenuOpened, setMenuOpened] = useState(false)
  const { onScroll, getScrollPosition } = useScrollPosition()
  const [areScroledToUp, setScrolledToUp] = useState(true)
  const lastScrollPosition = useRef(0)
  
  const isNavActive = useCallback(
    (path: string) => {
      return router.asPath === path;
    },
    [router.asPath],
  )

  useEffect(() => {
    const firstScrollPosition = getScrollPosition()
    const handleScroll = (scrollPosition: number) => {
      if (scrollPosition < 80) {
        setScrolledToUp(true)
      } else {
        setScrolledToUp(scrollPosition < lastScrollPosition.current)
      }

      lastScrollPosition.current = scrollPosition
    }
    handleScroll(firstScrollPosition)
    return onScroll(handleScroll)
  }, [getScrollPosition, lastScrollPosition, onScroll])
  
  return (
    <header className={classNames('fixed z-50 top-0 left-0 w-full h-20 bg-white shadow-lg transition-transform duration-300 ease-out', {
      '-translate-y-full': !areScroledToUp,
    })}>
      <div className='container-big h-full flex items-center justify-between'>
        <div className='absolute lg:hidden z-10 left-0 top-0 bg-white w-full h-full' />
        <Link 
          href="/" 
          onClick={() => setMenuOpened(false)} 
          className='relative z-20 w-[12.3125rem] h-[2.5rem] lg:w-[14.5rem] lg:h-[2.9375rem] flex hover:opacity-80 transition-opacity'
        >
          <Image 
            src={LogoImage}
            alt="Logo CarDonum.org"
            width={232}
            height={47}
            className="relative -top-1"
            loading='eager'
          />
        </Link>
        <nav className={classNames("fixed z-0 bg-white shadow-lg lg:shadow-none w-full p-10 lg:w-auto top-0 left-0 transition-transform duration-300 ease-out lg:relative lg:p-0 flex flex-col lg:flex-row gap-3 items-center", {
          "-translate-y-full lg:translate-y-0": !isMenuOpened,
          "translate-y-20 lg:translate-y-0": isMenuOpened
        })}>
          <Link href="/" onClick={() => setMenuOpened(false)} className={classNames("group relative flex pl-[1.6875rem] pr-[1.5625rem] py-[0.625rem] transition-colors rounded-bubble", {
            "bg-primary ": isNavActive("/")
          })}>
            <p className={classNames("relative z-10 text-gray group-hover:text-primary transition-colors text-[0.8125rem] font-extrabold", {
              "!text-white group-hover:text-white": isNavActive('/')
            })}>Home</p>
          </Link>
          <Link href="/about-us" onClick={() => setMenuOpened(false)} className={classNames("group relative flex pl-[1.6875rem] pr-[1.5625rem] py-[0.625rem] transition-colors rounded-bubble", {
            "bg-primary ": isNavActive("/about-us")
          })}>
            <p className={classNames("relative z-10 text-gray group-hover:text-primary transition-colors text-[0.8125rem] font-extrabold", {
              "!text-white group-hover:text-white": isNavActive('/about-us')
            })}>About us</p>
          </Link>
          <Link href="/contact-us" onClick={() => setMenuOpened(false)} className={classNames("group relative flex pl-[1.6875rem] pr-[1.5625rem] py-[0.625rem] transition-colors rounded-bubble", {
            "bg-primary ": isNavActive("/contact-us")
          })}>
            <p className={classNames("relative z-10 text-gray group-hover:text-primary transition-colors text-[0.8125rem] font-extrabold", {
              "!text-white group-hover:text-white": isNavActive('/contact-us')
            })}>Contact us</p>
          </Link>
          <Link href="/donate" onClick={() => setMenuOpened(false)} className={classNames("group relative flex pl-[1.6875rem] pr-[1.5625rem] py-[0.625rem] transition-colors rounded-bubble", {
            "bg-primary ": isNavActive("/donate")
          })}>
            <p className={classNames("relative z-10 text-gray group-hover:text-primary transition-colors text-[0.8125rem] font-extrabold", {
              "!text-white group-hover:text-white": isNavActive('/donate')
            })}>Donate</p>
          </Link>
        </nav>
        <div className='hidden lg:flex flex-row items-center'>
          <a 
            href="tel:+7020000000" 
            className='flex flex-row items-center text-[0.8125rem] text-gray hover:text-primary transition-colors'
          >
            <TelIcon className='w-[0.6875rem] h-[1.125rem] text-primary' />
            <p className='ml-[0.625rem]'>
              Call us: <strong>702-000-0000</strong>
            </p>
          </a>
          <div className="hidden xl:flex mx-6 w-[1px] h-4 content-[''] bg-gray-medium" />
          <div
            className='relative w-[11.25rem] h-10 hidden xl:flex overflow-hidden'
          >
            <object 
              data={VerifyButton}
              className="absolute top-[calc(50%-0.5rem)] left-0 -translate-y-1/2 w-full"
            />
          </div>
        </div>
        <button
          className={classNames(
            'relative z-20 hamburger hamburger--spin !flex lg:!hidden hover:!opacity-80',
            {
              'is-active': isMenuOpened,
            }
          )}
          type="button"
          aria-label="Menu"
          onClick={() => setMenuOpened(!isMenuOpened)}
        >
          <span className="hamburger-box">
            <span
              className="hamburger-inner text-primary"
            ></span>
          </span>
        </button>
      </div>
    </header>
  );
}

export default Header;