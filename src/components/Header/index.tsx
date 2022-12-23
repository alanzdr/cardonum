import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import classNames from 'classnames';

import LogoImage from 'assets/logo.svg'
import TelIcon from 'assets/icons/phone.svg'
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
        <Link href="/" className='flex hover:opacity-80 transition-opacity'>
          <Image 
            src={LogoImage}
            alt="Logo CarDonum.org"
            width={232}
            height={47}
            className="relative -top-1"
            loading='eager'
          />
        </Link>
        <nav className='flex flex-row items-center'>
          <Link href="/" className={classNames("group relative flex pl-[1.6875rem] pr-[1.5625rem] py-[0.625rem] bg-transparent transition-colors rounded-bubble", {
            "bg-primary ": isNavActive("/")
          })}>
            <p className={classNames("relative z-10 text-gray group-hover:text-primary transition-colors text-[0.8125rem] font-extrabold", {
              "!text-white group-hover:text-white": isNavActive('/')
            })}>Home</p>
          </Link>
          <Link href="/about" className={classNames("ml-3 group relative flex pl-[1.6875rem] pr-[1.5625rem] py-[0.625rem] bg-transparent transition-colors rounded-bubble", {
            "bg-primary ": isNavActive("/about")
          })}>
            <p className={classNames("relative z-10 text-gray group-hover:text-primary transition-colors text-[0.8125rem] font-extrabold", {
              "!text-white group-hover:text-white": isNavActive('/about')
            })}>About us</p>
          </Link>
          <Link href="/contact" className={classNames("ml-3 group relative flex pl-[1.6875rem] pr-[1.5625rem] py-[0.625rem] bg-transparent transition-colors rounded-bubble", {
            "bg-primary ": isNavActive("/contact")
          })}>
            <p className={classNames("relative z-10 text-gray group-hover:text-primary transition-colors text-[0.8125rem] font-extrabold", {
              "!text-white group-hover:text-white": isNavActive('/contact')
            })}>Contact us</p>
          </Link>
          <Link href="/donate" className={classNames("ml-3 group relative flex pl-[1.6875rem] pr-[1.5625rem] py-[0.625rem] bg-transparent transition-colors rounded-bubble", {
            "bg-primary ": isNavActive("/donate")
          })}>
            <p className={classNames("relative z-10 text-gray group-hover:text-primary transition-colors text-[0.8125rem] font-extrabold", {
              "!text-white group-hover:text-white": isNavActive('/donate')
            })}>Donate</p>
          </Link>
        </nav>
        <div className='flex flex-row items-center'>
          <a 
            href="tel:+7020000000" 
            className='flex flex-row items-center font-extrabold text-[0.8125rem] text-gray hover:text-primary transition-colors'
          >
            <Image 
              src={TelIcon}
              alt="Phone Icon"
              loading='eager'
              width={11}
              height={18}
            />
            <p className='ml-[0.625rem]'>(702) 000-0000</p>
          </a>
          <div className="mx-6 w-[1px] h-4 content-[''] bg-gray-medium" />
          <div className='flex flex-row items-center pl-4 pr-6 pt-3 pb-[0.625rem] bg-gray-light rounded-bubble'>
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