import React from 'react';
import Image from 'next/image'
import { m, MotionProps } from 'framer-motion';

import BackgroundImage from 'assets/home/types-vehicle-background.png'
import BackgroundMobileImage from 'assets/home/types-vehicle-background-mobile.png'
import KidImage from 'assets/about/institution-image.png'

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
      <m.div {...animation()} className="w-[21.604rem] h-[29.375rem] md:h-auto md:w-[24rem] lg:w-[28rem] xl:w-[38.625rem] absolute left-0 top-0 z-0">
        <Image 
          src={KidImage}
          alt="children hugging"
          width={618}
          height={803}
          className="w-full object-contain object-left-top"
        />
      </m.div>
    </div>
  );
}

export default Background;