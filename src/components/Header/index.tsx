import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import classNames from 'classnames';

import LogoImage from 'assets/logo.svg'
import { ReactComponent as TelIcon } from 'assets/icons/cell.svg'
import VerifyIcon from 'assets/icons/verify.svg'

const Header: React.FC = () => {
  const router = useRouter()
  
  const isNavActive = useCallback(
    (path: string) => {
      return router.asPath === path;
    },
    [router.asPath],
  )
  
  return (
    <header className='fixed z-50 top-0 left-0 w-full h-20 bg-white shadow-lg'>
      <div className='container-big h-full flex items-center justify-between'>
        <Link href="/" className='w-[12.3125rem] h-[2.5rem] lg:w-[14.5rem] lg:h-[2.9375rem] flex hover:opacity-80 transition-opacity'>
          <Image 
            src={LogoImage}
            alt="Logo CarDonum.org"
            width={232}
            height={47}
            className="relative -top-1"
            loading='eager'
          />
        </Link>
        <nav className='hidden lg:flex flex-row items-center'>
          <Link href="/" className={classNames("group relative flex pl-[1.6875rem] pr-[1.5625rem] py-[0.625rem] transition-colors rounded-bubble", {
            "bg-primary ": isNavActive("/")
          })}>
            <p className={classNames("relative z-10 text-gray group-hover:text-primary transition-colors text-[0.8125rem] font-extrabold", {
              "!text-white group-hover:text-white": isNavActive('/')
            })}>Home</p>
          </Link>
          <Link href="/about-us" className={classNames("ml-3 group relative flex pl-[1.6875rem] pr-[1.5625rem] py-[0.625rem] transition-colors rounded-bubble", {
            "bg-primary ": isNavActive("/about-us")
          })}>
            <p className={classNames("relative z-10 text-gray group-hover:text-primary transition-colors text-[0.8125rem] font-extrabold", {
              "!text-white group-hover:text-white": isNavActive('/about-us')
            })}>About us</p>
          </Link>
          <Link href="/contact-us" className={classNames("ml-3 group relative flex pl-[1.6875rem] pr-[1.5625rem] py-[0.625rem] transition-colors rounded-bubble", {
            "bg-primary ": isNavActive("/contact-us")
          })}>
            <p className={classNames("relative z-10 text-gray group-hover:text-primary transition-colors text-[0.8125rem] font-extrabold", {
              "!text-white group-hover:text-white": isNavActive('/contact-us')
            })}>Contact us</p>
          </Link>
          <Link href="/donate" className={classNames("ml-3 group relative flex pl-[1.6875rem] pr-[1.5625rem] py-[0.625rem] transition-colors rounded-bubble", {
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
          <div className='hidden xl:flex flex-row items-center pl-4 pr-6 pt-3 pb-[0.625rem] bg-gray-light rounded-bubble'>
            <Image 
              src={VerifyIcon}
              alt="Phone Icon"
              loading='eager'
              width={16}
              height={16}
            />
            <p className='ml-2 font-extrabold text-[0.8125rem] text-gray'>501c3 Accredited</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;