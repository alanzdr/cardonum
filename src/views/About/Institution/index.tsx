import Button from 'components/Button';
import React from 'react';

import Background from './Background';
import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';

const Institution: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section className="relative pt-[29.375rem] pb-16 sm:py-32 w-full">
      <Background animation={topDownShowAnimation} />
      <div ref={animationRef} className='container relative z-10 flex justify-start sm:justify-end'>
        <div className='sm:max-w-[21rem] md:max-w-[31rem]'>
          <m.div  
            className='flex flex-row items-center '
            {...topDownShowAnimation(0.2)}  
          >
            <h2 className='heading-2 lg:text-4xl max-w-[23rem]'>
              Lorem ipsum dolor sit amet consectutier
              web elit
            </h2>
          </m.div>
          <div className='mt-8 flex flex-col gap-6'>
            <m.p  {...topDownShowAnimation(0.4)} className='font-bold'>
              Our institution is dedicated to providing resources 
              to those who are facing hardship due to illness, 
              disability, physical abuse, rape, and other 
              unfortunate circumstances. 
            </m.p>
            <m.p {...topDownShowAnimation(0.5)}>
              We adhere to a stringent policy for the distribution 
              of resources to ensure the prevention of misuse of 
              donations.
            </m.p>
            <m.p {...topDownShowAnimation(0.6)}>
              We are an expanding organization and are actively 
              seeking new team members. 
            </m.p>
            <m.p {...topDownShowAnimation(0.7)}>
              If you would like to contribute to something meaningful 
              and make a difference, <b>please contact us.</b>
            </m.p>
            <m.div {...topDownShowAnimation(0.8)} className='flex items-center pt-2'>
              <Button className='w-full md:w-72'>
                Contact us
              </Button>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Institution;