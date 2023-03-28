import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion';

import BackgroundImage from 'assets/about/founders-image-bg-03.svg'
import PortraitImage from 'assets/about/portrait-example.png'
import useScrollAnimation from 'hooks/useScrollAnimation';


const Michal: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <div className='lg:mt-40'>
      <div 
        ref={animationRef} 
        className='grid container grid-rows-[auto] lg:grid-rows-1 lg:grid-cols-[7fr,8fr] lg:gap-24'
      >
        <div 
          className='relative w-full h-[23.675rem] lg:h-full flex justify-center items-center'
        >
          <div
            className='absolute w-[23.875rem] h-[23.875rem] lg:w-[31.9375rem] lg:h-[31.9375rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          >
            <m.div {...topDownShowAnimation()}>
              <Image 
                src={BackgroundImage}
                alt="Portrait background"
                width={511}
                height={511}
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
            <h2 className='heading-2 ml-7 relative -top-1 max-w-40'>
              Michal 
              Dadon
            </h2>
          </m.div>
          <div className='mt-8'>
            <m.p {...topDownShowAnimation(0.4)}>
              In her free time, Michal enjoys reading biographies 
              and cooking. She loves spending time with her family, 
              friends, and her pet parrot. 
            </m.p>
            <m.p {...topDownShowAnimation(0.6)} className='mt-6'>
              Michal&apos;s passion for helping others led her to 
              volunteer for a local non-profit organization dedicated 
              to providing health care to underserved communities. 
            </m.p>
            <m.p {...topDownShowAnimation(0.8)} className='mt-6 font-extrabold'>
              She is an advocate for social justice and is committed 
              to making a difference in the lives of those in need.


            </m.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Michal;