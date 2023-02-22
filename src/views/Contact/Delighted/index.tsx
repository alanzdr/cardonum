import React from 'react';
import Image from 'next/image'

import FlowerIcon from 'assets/contact-us/delighted-icon.svg'
import KidImage from 'assets/contact-us/delighted-image.png'
import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';

const Delighted: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation(0.4)

  return (
    <section className='w-full overflow-hidden mt-20'>
      <div 
        ref={animationRef} 
        className='grid container grid-rows-[auto] gap-10 lg:grid-rows-1 lg:grid-cols-[7fr,8fr] lg:gap-24'
      >
        <div className='flex flex-col row-start-2 lg:row-start-1'>
          <m.div {...topDownShowAnimation(0.6)} >
            <Image 
              src={FlowerIcon}
              alt="Flower Icon"
              width={46}
              height={48}
            />
          </m.div>
          <m.div  
            className='flex flex-row items-center mt-4'
            {...topDownShowAnimation(0.8)}  
          >
            <h3 className='heading-2 max-w-[25rem]'>
              We are delighted that you are considering 
              partnering with our non-profit organization. 
            </h3>
          </m.div>
          <div className='mt-8'>
            <m.p {...topDownShowAnimation(1)}>
              We appreciate your interest and would be more than 
              happy to answer any questions you may have about 
              our company. 
            </m.p>
            <m.p {...topDownShowAnimation(1.2)} className='mt-8'>
              Additionally, if you are interested in donating your 
              vehicle, we encourage you to <b>reach out to us via the 
              contact form</b> on our website or by <b>giving us a 
              call.</b> We look forward to hearing from you soon.
            </m.p>
          </div>
        </div>
        <m.div 
          {...topDownShowAnimation(0.4)} 
          className='flex justify-center lg:justify-end items-center'
        >
          <Image 
            src={KidImage}
            alt="happy child with glasses"
            width={535}
            height={507}
          />
        </m.div>
      </div>
    </section>
  );
}

export default Delighted;