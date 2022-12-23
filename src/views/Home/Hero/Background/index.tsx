import React from 'react';
import Image from 'next/image';
import { m, MotionProps } from 'framer-motion';

import BackgroundImage from 'assets/home/hero-background.png'
import WomanImage from 'assets/home/hero-woman.png'
import RightLinesImage from 'assets/home/right-lines.svg'

interface Props {
  animation: (delay?: number) => MotionProps
}

const Background: React.FC<Props> = ({animation}) => {
  return (
    <div>
      <Image 
        src={BackgroundImage}
        alt="background colors"
        className='w-full h-full absolute top-0 left-0'
        loading='eager'
      />
      <m.div {...animation(0.5)} className="absolute top-[calc(50%+1rem)] left-[calc(50%+3.5rem)]">
        <Image 
          src={WomanImage}
          alt="Woman in a car"
          className='-translate-x-1/2 -translate-y-1/2'
          loading='eager'
          width={560}
          height={569}
          quality={85}
        />
      </m.div>
      <m.div {...animation(0.5)} className="absolute top-[10.5rem] right-0">
        <Image 
          src={RightLinesImage}
          alt="lines"
          loading='eager'
          width={98.5}
          height={197}
        />
      </m.div>

      <m.div
        {...animation(0.6)}
        className='ball w-8 h-8 absolute top-16 left-[calc(50%-19.8125rem)]'
      />
      <m.div
        {...animation(0.7)}
        className='ball w-3 h-3 absolute top-[9.06rem] left-[calc(50%-15.1875rem)]'
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
  );
}

export default Background;