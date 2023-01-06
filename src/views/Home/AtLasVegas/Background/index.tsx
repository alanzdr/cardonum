import React from 'react';
import Image from 'next/image'

import KidImage from 'assets/home/at-las-vegas-image.png'
import { m, MotionProps } from 'framer-motion';
import LeftLinesImage from 'assets/home/left-lines.svg'

interface Props {
  animation: (delay?: number) => MotionProps
}

const Background: React.FC<Props> = ({animation}) => {
  return (
    <div>
      <m.div {...animation()} className="w-[21.31rem] h-[29.5rem] lg:w-[33.5rem] lg:h-[49.125rem] absolute right-0 lg:-right-8 -top-6 lg:top-0 z-0">
        <Image 
          src={KidImage}
          alt="child in a wheelchair"
          width={536}
          height={786}
          className="w-full h-full object-contain object-right"
        />
      </m.div>
      <m.div {...animation(0.6)} className="absolute top-[17.0625rem] lg:top-6 left-0">
        <Image 
          src={LeftLinesImage}
          alt="lines"
          loading='eager'
          width={98.5}
          height={197}
        />
      </m.div>
      <m.div
        {...animation(0.2)}
        className='ball w-5 h-5 lg:w-8 lg:h-8 absolute top-3 lg:top-[3.125rem] right-[19.9375rem] lg:right-[34.4375rem]'
      />
      <m.div
        {...animation(0.4)}
        className='ball w-2 h-2 lg:w-3 lg:h-3 absolute top-[3.125rem] lg:top-[8.25rem] right-[18.9375rem] lg:right-[31.625rem]'
      />
    </div>
  );
}

export default Background;