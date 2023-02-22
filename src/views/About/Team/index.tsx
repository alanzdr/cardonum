import React from 'react';
import Image from 'next/image'

import TeamIcon from 'assets/about/team-icon.svg'
import TeamImage from 'assets/about/team-image.png'
import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';

const Team: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation(0.4)

  return (
    <section className='w-full overflow-hidden mt-14 lg:mt-24'>
      <div 
        ref={animationRef} 
        className='grid container grid-rows-[auto] gap-10 lg:grid-rows-1 lg:grid-cols-2 lg:gap-24'
      >
        <div className='flex flex-col justify-center'>
          <m.div {...topDownShowAnimation()} >
            <Image 
              src={TeamIcon}
              alt="Team Icon"
              width={55}
              height={55}
            />
          </m.div>
          <m.div  
            className='flex flex-row items-center mt-4'
            {...topDownShowAnimation(0.2)}  
          >
            <h3 className='heading-2'>
              We have a fantastic team
            </h3>
          </m.div>
          <m.div 
            {...topDownShowAnimation(0.3)}
            className='w-16 h-[2px] bg-primary mt-8'
          />
          <div className='mt-8'>
            <m.p {...topDownShowAnimation(0.4)} >
              All dedicated professionals who are committed to 
              realizing our mission statement and creating a 
              positive change in the world. 
            </m.p>
            <m.p {...topDownShowAnimation(0.6)} className='mt-8'>
              Each individual contribution is invaluable and 
              your car donation is no different. 
            </m.p>
            <m.p {...topDownShowAnimation(0.8)} className='mt-8 font-extrabold'>
              The proceeds from your generous donation will allow 
              us to make a meaningful difference in the lives of 
              those in need. 
            </m.p>
          </div>
        </div>
        <m.div 
          {...topDownShowAnimation(0.4)} 
          className='flex justify-center lg:justify-end items-center'
        >
          <Image 
            src={TeamImage}
            alt="several people shaking hands"
            width={499}
            height={507}
          />
        </m.div>
      </div>
    </section>
  );
}

export default Team;