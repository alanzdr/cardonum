import React from 'react';
import Image from 'next/image'

import BackgroundImage from 'assets/home/at-las-vegas-background.png'
import BackgroundMobileImage from 'assets/home/at-las-vegas-background-mobile.png'
import CarImage from 'assets/donate/check-list-image.png'
import { m, MotionProps } from 'framer-motion';

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
      <m.div {...animation()} className="w-full h-[36.25rem] lg:w-[28.75rem] lg:h-full absolute right-0 lg:-right-0 -top-6 lg:top-0 z-0">
        <Image 
          src={CarImage}
          alt="White car image"
          width={460}
          height={844}
          className="w-full h-full object-contain object-right"
        />
      </m.div>
    </div>
  );
}

export default Background;