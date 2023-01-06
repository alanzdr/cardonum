import React from 'react';
import Image from 'next/image';
import { m, MotionProps } from 'framer-motion';

import BackgroundImage from 'assets/home/hero-background.png'
import BackgroundMobileImage from 'assets/home/hero-background-mobile.png'
import KidsImage from 'assets/home/hero-kids.png'
import RightLinesImage from 'assets/home/right-lines.svg'
import LeftLinesImage from 'assets/home/left-lines.svg'

interface Props {
  animation: (delay?: number) => MotionProps
}

const Background: React.FC<Props> = ({animation}) => {
  return (
    <div className='relative top-0 left-0 w-full lg:h-full lg:overflow-hidden'>
      <Image 
        src={BackgroundImage}
        alt="background colors"
        className='hidden object-cover object-center lg:flex w-full h-full absolute top-0 left-0'
        loading='eager'
      />
      <Image 
        src={BackgroundMobileImage}
        alt="background colors"
        className='lg:hidden object-cover object-center w-full h-[42.5rem] absolute top-0 left-0'
        loading='eager'
      />
      <div className='relative w-full h-[22.5rem] lg:static lg:flex overflow-hidden'>
        <m.div {...animation()} className="absolute top-1/2 left-1/2 lg:left-[calc(50%+6rem)] w-[25rem] lg:w-[42.5rem]">
          <Image 
            src={KidsImage}
            alt="Kids Images"
            className='-translate-x-1/2 -translate-y-1/2'
            loading='eager'
            width={680}
            height={645}
            quality={90}
          />
        </m.div>
      </div>
      <div className='hidden lg:block'> 
        <m.div {...animation(0.5)} className="absolute top-[10.5rem] right-0">
          <Image 
            src={RightLinesImage}
            alt="lines"
            loading='eager'
            width={98.5}
            height={197}
          />
        </m.div>
        <m.div {...animation(0.5)} className="absolute top-[3.375rem] left-0">
          <Image 
            src={LeftLinesImage}
            alt="lines"
            loading='eager'
            width={98.5}
            height={197}
          />
        </m.div>

        <m.div
          {...animation(0.6)}
          className='ball w-8 h-8 absolute top-16 left-[calc(50%-14.8125rem)]'
        />
        <m.div
          {...animation(0.8)}
          className='ball w-8 h-8 absolute bottom-[8.9375rem] right-16'
        />
        <m.div
          {...animation(0.9)}
          className='ball w-3 h-3 absolute top-[5.9375rem] right-[2.8125rem]'
        />
      </div>
    </div>
  );
}

export default Background;