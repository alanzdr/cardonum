import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ReactComponent as HomeIcon } from 'assets/icons/home.svg'
import HeroBackground from 'assets/page-hero/hero-background.png'
import HeroMobileBackground from 'assets/page-hero/hero-background-mobile.png'
import LeftLinesImage from 'assets/shapes/left-lines.svg'
import VectorLinesImage from 'assets/page-hero/vector-lines.svg'
import { m } from 'framer-motion';
import useScrollAnimation from 'hooks/useScrollAnimation';


interface Props {
  title: string,
}

const PageHero: React.FC<Props> = ({title}) => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()
  
  return (
    <section ref={animationRef} className='relative overflow-hidden w-full bg-[#e1e0e7] h-60 '>
      <div>
        <Image 
          src={HeroBackground}
          alt="Background gradient"
          className='hidden sm:flex absolute top-0 left-0 w-full h-full object-cover object-center'
        />
        <Image 
          src={HeroMobileBackground}
          alt="Background gradient"
          className='flex sm:hidden absolute top-0 left-0 w-full h-full object-cover object-center'
        />
        <m.div {...topDownShowAnimation()} className="hidden md:flex absolute top-5 left-0">
          <Image 
            src={LeftLinesImage}
            alt="lines"
            loading='eager'
            width={98.5}
            height={197}
          />
        </m.div>
        <m.div {...topDownShowAnimation()} className="hidden md:flex absolute bottom-0 -right-0">
          <Image 
            src={VectorLinesImage}
            alt="lines"
            loading='eager'
            width={422}
            height={320}
          />
        </m.div>
      </div>
      <div className='relative z-20 container h-full flex flex-col items-center justify-center'>
        <div>
          <m.div
            {...topDownShowAnimation(0.4)}
            className='ball w-4 h-4 md:w-8 md:h-8 absolute top-10 md:top-14 left-0 lg:left-48'
          />
          <m.div
            {...topDownShowAnimation(0.4)}
            className='ball w-4 h-4 md:w-8 md:h-8 absolute bottom-10 lg:bottom-[4.375rem] right-6 md:right-14'
          />
          <m.div
            {...topDownShowAnimation(0.6)}
            className='ball w-2 h-2 md:w-[0.875rem] md:h-[0.875rem] absolute top-20 md:top-[inherit] md:bottom-10 left-7 md:left-3'
          />
          <m.div
            {...topDownShowAnimation(0.6)}
            className='ball w-[0.625rem] h-[0.625rem] md:w-[0.875rem] md:h-[0.875rem] absolute top-32 md:top-24 right-0 md:right-2'
          />
          <m.div
            {...topDownShowAnimation(0.6)}
            className='hidden lg:flex ball w-[0.875rem] h-[0.875rem] absolute top-32 left-72'
          />
        </div>
        <m.h1 {...topDownShowAnimation(0.2)} className='text-[2.625rem] md:text-[3.5rem] font-bold tracking-wider'>{title}</m.h1>
        <m.nav {...topDownShowAnimation(0.4)} className='inline-flex items-center mt-3'>
          <Link href="/" className='inline-flex items-center text-primary hover:text-primary-dark'>
            <HomeIcon width={16} height={15} className="relative -top-px"/>
            <p className='ml-2 underline text-sm'>Home</p>
          </Link>
          <span className='mx-2 opacity-30 text-sm'>/</span>
          <p className='font-bold text-sm'>
            {title}
          </p>
        </m.nav>
      </div>
    </section>
  );
}

export default PageHero;