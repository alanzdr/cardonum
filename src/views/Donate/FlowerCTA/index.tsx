import React from 'react';
import Image from 'next/image'

import FlowerIcon from 'assets/donate/flower-cta-icon.svg'
import FlowerImage from 'assets/donate/flower-cta-image.png'
import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';
import Button from 'components/Button';

const FlowerCTA: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation(0.4)

  return (
    <section className='container mt-16'>
      <div 
        ref={animationRef} 
        className='grid grid-rows-[auto] gap-10 lg:grid-rows-1 lg:grid-cols-2 lg:gap-20'
      >
        <m.div 
          {...topDownShowAnimation()} 
          className='flex justify-center lg:justify-end items-center row-start-2 lg:row-start-1'
        >
          <Image 
            src={FlowerImage}
            alt="child in wheelchair"
            width={557}
            height={535}
          />
        </m.div>
        <div className='flex flex-col justify-center'>
          <m.div  
            {...topDownShowAnimation(0.2)}  
          >
            <Image 
              src={FlowerIcon}
              alt="Flower Icon"
              width={40}
              height={56}
            />
          </m.div>
          <m.h3 
            {...topDownShowAnimation(0.3)} 
            className='text-[2.5rem] leading-tight mt-4'
          >
            Rutrum vitae augue ante vitae potenti pharetra
          </m.h3>
          <div className='mt-8 lg:max-w-[27.75rem]'>
            <m.p {...topDownShowAnimation(0.4)} >
              Suspendisse eget nam cubilia tempus libero morbi 
              tellus congue velit turpis sed, malesuada sem per 
              tempus curae nullam lectus pretium elementum morbi 
              blandit erat. 
            </m.p>
            <m.p {...topDownShowAnimation(0.6)} className='mt-8'>
              Magna fusce malesuada convallis suspendisse risus 
              metus cubilia ligula duis. 
            </m.p>
            <m.p {...topDownShowAnimation(0.8)} className='mt-8'>
              Potenti primis conubia vivamus dolor vel etiam massa 
              blandit massa dictumst, ut donec egestas praesent 
              morbi praesent consequat quisque consequat.
            </m.p>
          </div>
        </div>
      </div>
      <div className='mt-8 lg:mt-20 flex flex-col md:grid md:grid-cols-2 lg:gap-20'>
        <m.div {...topDownShowAnimation(1)} className='flex flex-row'>
          <div 
            className='relative top-[0.875rem] w-10 lg:w-20 h-px bg-[#1C1D25] flex-none'
          />
          <h3 className='ml-5 heading-3 max-w-[21.4375rem]'>Donate today and make an impact in someone&apos;s life! </h3>
        </m.div>
        <m.div {...topDownShowAnimation(1.2)} className='w-full mx-auto mt-8 max-w-[19.375rem] md:m-0 '>
          <Button
            component='button'
            type="button"
            onClick={() => {}}
            className="w-full"
          >
            Donate today
          </Button>
        </m.div>
      </div>
    </section>
  );
}

export default FlowerCTA;