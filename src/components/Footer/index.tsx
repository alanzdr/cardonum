import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import LogoImage from 'assets/logo.svg'
import VerifyIcon from 'assets/icons/verify.svg'
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg'
import { ReactComponent as TwitterIcon } from 'assets/icons/twiter.svg'
import { ReactComponent as InstagramIcon } from 'assets/icons/instragram.svg'
import { ReactComponent as TelIcon } from 'assets/icons/phone.svg'
import Button from 'components/Button';

const Footer: React.FC = () => {
  return (
    <footer className='py-12 lg:pt-24 lg:pb-40 bg-white '>
      <div className='container'>
        <div className='flex flex-col lg:flex-row items-center justify-between'>
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
          <nav className='mt-6 pt-6 w-full max-w-[26rem] px-2 border-t-[1px] border-gray-medium lg:border-none lg:px-0 lg:pt-0 lg:mt-0 flex flex-row justify-between lg:justify-start items-center lg:w-auto lg:max-w-full'>
            <Link href="/" className='text-gray text-[0.8125rem] font-extrabold hover:text-primary transition-colors'>
              Home
            </Link>
            <Link href="/about" className='ml-6 lg:ml-12 text-gray text-[0.8125rem] font-extrabold hover:text-primary transition-colors'>
              About us
            </Link>
            <Link href="/contact" className='ml-6 lg:ml-12 text-gray text-[0.8125rem] font-extrabold hover:text-primary transition-colors'>
              Contact us
            </Link>
            <Link href="/donate" className='ml-6 lg:ml-12 text-gray text-[0.8125rem] font-extrabold hover:text-primary transition-colors'>
              Donate
            </Link>
            <div className="hidden lg:block mx-8 w-[1px] h-4 content-[''] bg-gray-medium" />
            <a 
              href="tel:+7020000000" 
              className=' hidden lg:flex flex-row items-center font-extrabold text-[0.8125rem] text-gray hover:text-primary transition-colors'
            >
              <TelIcon className='w-[0.6875rem] h-[1.125rem] text-primary' />
              <p className='ml-[0.625rem]'>(702) 000-0000</p>
            </a>
          </nav>
        </div>
        <div className='mt-7 flex lg:hidden items-center justify-center'>
          <Button
            component='a'
            href="tel:+7020000000"
            variant='filled'
          >
            <TelIcon className='w-[0.6875rem] h-[1.125rem]' />
            <p className='ml-[0.625rem]'>(702) 000-0000</p>
          </Button>
        </div>
        <div className='flex max-w-[26rem] mx-auto flex-col-reverse lg:flex-row items-center justify-between mt-8 pt-8 lg:mt-11 lg:pt-11 border-t-[1px] border-gray-medium lg:max-w-full'>
          <p className='max-w-[15.625rem] text-center mt-7 lg:text-left lg:mt-0 lg:max-w-full text-gray-medium-dark text-sm'>
            Copyright © 2023
            <strong className='text-gray'> CarDonum.org </strong>
            - All Rights Reserved.
          </p>
          <div className='flex flex-row items-center'>
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
            <div className='ml-8 flex flex-row items-center'>
              <a 
                href="http://" 
                target="_blank" 
                rel="noopener noreferrer"
                className='w-8 h-8 rounded-bubble bg-transparent text-primary flex items-center justify-center transition-all hover:bg-primary hover:text-white'
              >
                <FacebookIcon />
              </a>
              <a 
                href="http://" 
                target="_blank" 
                rel="noopener noreferrer"
                className='ml-2 w-8 h-8 rounded-bubble bg-transparent text-primary flex items-center justify-center transition-all hover:bg-primary hover:text-white'
              >
                <TwitterIcon />
              </a>
              <a 
                href="http://" 
                target="_blank" 
                rel="noopener noreferrer"
                className='ml-2 w-8 h-8 rounded-bubble bg-transparent text-primary flex items-center justify-center transition-all hover:bg-primary hover:text-white'
              >
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;