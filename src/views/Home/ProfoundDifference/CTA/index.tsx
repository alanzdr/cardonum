import Button from 'components/Button';
import { m } from 'framer-motion';
import useScrollAnimation from 'hooks/useScrollAnimation';
import React from 'react';

// import { Container } from './styles';

const CTA: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <div ref={animationRef} className='container mt-8 lg:mt-20 flex flex-col md:flex-row md:items-center justify-between'>
      <m.div {...topDownShowAnimation()} className='flex flex-row'>
        <div 
          className='relative top-[0.875rem] w-10 lg:w-20 h-px bg-[#1C1D25] flex-none'
        />
        <h3 className='ml-5 heading-3 max-w-[21.4375rem]'>Donate today and make an impact in someone&apos;s life! </h3>
      </m.div>
      <m.div {...topDownShowAnimation(0.2)} className='w-full mx-auto mt-8 sm:w-1/2 max-w-[26.875rem] md:m-0 md:ml-4 '>
        <Button
          component='a' 
          href='/#donate-today'
          className="w-full"
        >
          Donate today
        </Button>
      </m.div>
    </div>
  );
}

export default CTA;