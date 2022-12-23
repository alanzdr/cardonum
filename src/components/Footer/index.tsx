import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import { Container } from './styles';

import LogoImage from 'assets/logo.svg'
import TelIcon from 'assets/icons/phone.svg'
import VerifyIcon from 'assets/icons/verify.svg'
import { ReactComponent as FacebookIcon } from 'assets/icons/facebook.svg'
import { ReactComponent as TwitterIcon } from 'assets/icons/twiter.svg'
import { ReactComponent as InstagramIcon } from 'assets/icons/instragram.svg'

const Footer: React.FC = () => {
  return (
    <footer className='pt-24 pb-40 bg-white '>
      <div className='container'>
        <div className='flex flex-row items-center justify-between'>
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
            <Link href="/" className='text-gray text-[0.8125rem] font-extrabold hover:text-primary transition-colors'>
              Home
            </Link>
            <Link href="/about" className='ml-12 text-gray text-[0.8125rem] font-extrabold hover:text-primary transition-colors'>
              About us
            </Link>
            <Link href="/contact" className='ml-12 text-gray text-[0.8125rem] font-extrabold hover:text-primary transition-colors'>
              Contact us
            </Link>
            <Link href="/donate" className='ml-12 text-gray text-[0.8125rem] font-extrabold hover:text-primary transition-colors'>
              Donate
            </Link>
            <div className="mx-8 w-[1px] h-4 content-[''] bg-gray-medium" />
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
          </nav>
        </div>
        <div className='flex flex-row items-center justify-between mt-11 pt-11 border-t-[1px] border-gray-medium'>
          <p className='text-gray-medium-dark text-sm'>
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