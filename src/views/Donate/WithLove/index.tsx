import React from 'react';
import Image from 'next/image'

import LoveIcon from 'assets/donate/with-love-icon.svg'
import WithLoveImage from 'assets/donate/with-love-image.png'

import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';

const WithLove: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section className='container mt-14 lg:mt-28'>
      <div 
        ref={animationRef} 
        className='grid grid-rows-[auto] gap-10 lg:grid-rows-1 lg:grid-cols-2 lg:gap-20'
      >
        <div className='flex flex-col'>
          <m.div  
            className='flex flex-row items-center'
            {...topDownShowAnimation()}  
          >
            <div className='w-12 h-[4.75rem] flex-none bg-primary rounded-lg flex items-center justify-center'>
              <Image 
                src={LoveIcon}
                alt="Hand with love"
                width={25}
                height={24}
              />
            </div>
            <h2 className='heading-2 ml-7 max-w-96'>
              Felis aenean. elit tincidunt nam magna
            </h2>
          </m.div>
          <div className='mt-8 lg:pl-[4.8rem] max-w-[33rem]'>
            <m.p {...topDownShowAnimation(0.2)} className="font-extrabold">
              Suspendisse eget nam cubilia tempus libero morbi 
              tellus congue velit turpis sed, malesuada sem per 
              tempus.
            </m.p>
            <m.p {...topDownShowAnimation(0.4)} className='mt-8'>
              Curae nullam lectus pretium elementum morbi blandit 
              erat, magna fusce malesuada convallis suspendisse 
              risus metus cubilia ligula duis. 
            </m.p>
            <m.p {...topDownShowAnimation(0.6)} className='mt-8'>
              Potenti primis conubia vivamus dolor vel etiam 
              massa blandit massa dictumst, ut donec egestas 
              praesent morbi praesent consequat quisque 
              consequat, taciti orci aliquam accumsan sed 
              gravida phasellus felis.
            </m.p>
          </div>
        </div>
        <m.div 
          {...topDownShowAnimation(0.8)} 
          className='flex justify-center lg:justify-end items-center'
        >
          <Image 
            src={WithLoveImage}
            alt="disabled children with solidarity symbols around"
            width={488}
            height={509}
            quality={90}
          />
        </m.div>
      </div>
    </section>
  );
}

export default WithLove;