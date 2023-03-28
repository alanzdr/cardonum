import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion';

import BackgroundImage from 'assets/about/founders-image-bg-01.svg'
import PortraitImage from 'assets/about/portrait-example.png'
import useScrollAnimation from 'hooks/useScrollAnimation';


const Nathan: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <div>
      <div 
        ref={animationRef} 
        className='grid container grid-rows-[auto] lg:grid-rows-1 lg:grid-cols-[7fr,8fr] lg:gap-24'
      >
        <div 
          className='relative w-full h-[23.675rem] lg:h-full flex justify-center items-center'
        >
          <div
            className='absolute w-[21.5rem] h-full lg:w-[28.625rem] lg:h-[31.5rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
            
          >
            <m.div {...topDownShowAnimation()}>
              <Image 
                src={BackgroundImage}
                alt="Portrait background"
                width={458}
                height={504}
              />
            </m.div>
          </div>
          <div
            className='absolute w-[14.1rem] h-[14.1rem] lg:w-[18.75rem] lg:h-[18.75rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          >
            <m.div {...topDownShowAnimation(0.2)}>
              <Image 
                src={PortraitImage}
                alt="Nathan Portrait"
                className='w-full h-full rounded-full'
                width={300}
                height={300}
              />
            </m.div>
          </div>
        </div>
        <div className='flex flex-col justify-center'>
          <m.div  
            className='flex flex-row items-center'
            {...topDownShowAnimation(0.2)}  
          >
            <div 
              className='w-1 h-[4.0625rem] flex-none bg-primary rounded-lg flex items-center justify-center' 
            />
            <h2 className='heading-2 ml-7 relative -top-1 max-w-52'>
              Nathan 
              Nehoraoff 
            </h2>
          </m.div>
          <div className='mt-8'>
            <m.p {...topDownShowAnimation(0.4)}>
              Nathan moved to Las Vegas in 2015, where he started 
              his own digital marketing business. He has also 
              worked with high-profile companies.
            </m.p>
            <m.p {...topDownShowAnimation(0.6)} className='mt-6'>
              Nathan has a passion for technology, and he constantly 
              strives to stay ahead of the curve. He is currently 
              working on developing a new platform to help businesses 
              and individuals market their products and services 
              more effectively.
            </m.p>
            <m.p {...topDownShowAnimation(0.8)} className='mt-6 font-bold'>
              Nathan&apos;s mission is to help people succeed in the digital world.
            </m.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nathan;