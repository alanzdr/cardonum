import React from 'react';
import Image from 'next/image'
import { m, MotionProps } from 'framer-motion';

import BackgroundImage from 'assets/home/types-vehicle-background.png'
import BackgroundMobileImage from 'assets/home/types-vehicle-background-mobile.png'
import BackgroundLineImage from 'assets/home/types-vehicle-background-line.svg'
import CarImage from 'assets/home/types-vehicle-car.png'

interface Props {
  animation: (delay?: number) => MotionProps
}

const Background: React.FC<Props> = ({animation}) => {
  return (
    <div>
      <Image 
        src={BackgroundImage}
        alt="background gradient"
        className="hidden md:flex w-full h-full absolute left-0 top-0 object-cover"
      />
      <Image 
        src={BackgroundMobileImage}
        alt="background gradient"
        className="md:hidden w-full h-full absolute left-0 top-0 object-cover"
      />
      <Image 
        src={BackgroundLineImage}
        alt="background line"
        className="hidden md:flex absolute right-0 top-0"
        width={341}
        height={432}
      />
      <m.div {...animation()} className="w-[20.625rem] h-[34.875rem] lg:w-[23.75rem] lg:h-[38.6875rem] xl:w-[32.1875rem] xl:h-[52.4375rem] absolute left-0 lg:-right-8 xl:right-0 top-0 z-0">
        <Image 
          src={CarImage}
          alt="white car"
          width={515}
          height={839}
          className="w-full h-full object-contain object-left"
        />
      </m.div>
    </div>
  );
}

export default Background;