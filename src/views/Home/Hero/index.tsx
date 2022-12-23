
import { m } from 'framer-motion';
import useScrollAnimation from 'hooks/useScrollAnimation';
import React from 'react';
import Background from './Background';
import Form from './Form';


const Hero: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section 
      id='section-hero' 
      ref={animationRef} 
      className='relative bg-[#e1e0e7]'
    >
      <Background animation={topDownShowAnimation} />
      <div className='relative z-20 container flex flex-row items-center justify-between'>
        <div className='max-w-[20.375rem] flex flex-col items-center'>
          <m.h1 {...topDownShowAnimation()} className='text-[4.25rem] leading-[1.05]'>
            <strong className='bg-gradient-to-r from-primary-dark to-primary-light bg-clip-text text-transparent'>Donate</strong><br />
            your car 
            to charity
          </m.h1>
          <m.p {...topDownShowAnimation(0.2)} className='text-sm leading-[1.8] text-blue-dark mt-9'>
            <strong>Donating your car to charity </strong>
            is an investment in the future of your community 
            and a powerful way to make a positive difference 
            in the world.
          </m.p>
        </div>
        <m.div 
          {...topDownShowAnimation(1.1)}
          className='relative overflow-hidden z-20 top-10 mt-8 bg-white shadow-lg p-10 rounded-form'
        >
          <Form />
        </m.div>
      </div>
    </section>
  );
}

export default Hero;