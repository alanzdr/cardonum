import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion';

import BackgroundImage from 'assets/about/founders-image-bg-02.svg'
import PortraitImage from 'assets/about/portrait-example.png'
import useScrollAnimation from 'hooks/useScrollAnimation';


const Avishai: React.FC = () => {
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
            className='absolute w-[28rem] h-[28rem] lg:w-[39.625rem] lg:h-[40rem] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          >
            <m.div {...topDownShowAnimation()}>
              <Image 
                src={BackgroundImage}
                alt="Portrait background"
                width={634}
                height={640}
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
              Avishai 
              Eitan 
            </h2>
          </m.div>
          <div className='mt-8'>
            <m.p {...topDownShowAnimation(0.4)}>
              Avishai is a highly successful entrepreneur who 
              has been in the used car business for over 30 years. 
              He started his career in the automotive industry in 
              the late 80s and quickly rose through the ranks to 
              become one of the most successful used car dealerships 
              in Nevada.
            </m.p>
            <m.p {...topDownShowAnimation(0.6)} className='mt-6'>
              Avishai has a passion for helping others and has always 
              been committed to providing his customers with the best 
              service and quality. He is known for his commitment to 
              excellence and his ability to consistently exceed 
              expectations.
            </m.p>
            <m.p {...topDownShowAnimation(0.8)} className='mt-6'>
              <b>Avishai is also a strong supporter of his local 
              community and contributes to numerous charities and causes. </b> 
              His is a true leader in the used car business and an 
              inspiration to many.


            </m.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Avishai;