import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion';

import MissionIcon from 'assets/about/mission-icon.svg'
import MissionImage from 'assets/about/mission-image.png'
import useScrollAnimation from 'hooks/useScrollAnimation';


const Mission: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section className='py-10 lg:py-14'>
      <div 
        ref={animationRef} 
        className='grid container grid-rows-[auto] gap-10 lg:grid-rows-1 lg:grid-cols-2 lg:gap-24'
      >
        <m.div 
          {...topDownShowAnimation()} 
          className='flex justify-center items-center'
        >
          <Image 
            src={MissionImage}
            alt="Person with child on lap and US flag"
            width={522}
            height={479}
            quality={90}
          />
        </m.div>
        <div className='flex flex-col justify-center'>
          <m.div  
            className='flex flex-row'
            {...topDownShowAnimation(0.2)}  
          >
            <div className='w-12 h-[4.75rem] flex-none bg-primary rounded-lg flex items-center justify-center'>
              <Image 
                src={MissionIcon}
                alt="target Icon"
                width={24}
                height={24}
                className="relative left-[2px]"
              />
            </div>
            <h2 className='heading-2 ml-7 relative -top-1 max-w-xs'>
              Our mission 
              statement
            </h2>
          </m.div>
          <div className='mt-8 lg:pl-[4.8rem]'>
            <m.p {...topDownShowAnimation(0.4)}>
              <b>We seek to provide essential resources and services to 
              individuals and families in need,</b> utilizing the proceeds 
              from car donations to make meaningful and lasting changes 
              in our community.
            </m.p>
            <m.p {...topDownShowAnimation(0.6)} className='mt-6'>
              We will work to empower those who are disadvantaged and 
              invest in their futures, providing essential items such 
              as food, clothing, and educational resources. We will 
              strive to create a world where everyone has access to 
              the basic essentials they need to thrive.
            </m.p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mission;