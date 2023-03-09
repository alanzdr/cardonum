import React from 'react';
import { m } from 'framer-motion';
import Image from 'next/image';

import useScrollAnimation from 'hooks/useScrollAnimation';
import ToyIcon from 'assets/about/areas-toy-icon.svg'
import CallIcon from 'assets/donate/points-phone.svg'
import TruckIcon from 'assets/donate/points-truck.svg'
import CalculatorIcon from 'assets/donate/points-calculator.svg'
import HappyIcon from 'assets/donate/points-happy.svg'

// import { Container } from './styles';

const PointsGrid: React.FC = () => {
  const { animationRef, topDownShowAnimation, leftRightShowAnimation } = useScrollAnimation()
  
  return (
    <section className='py-10 lg:py-16'>
      <div ref={animationRef} className="container">
        <div className='flex flex-col lg:items-center lg:text-center'>
          <m.h2 {...topDownShowAnimation()} className='mt-5 font-extrabold text-3xl'>
            Lorem ipsum in commodo 
          </m.h2>
          <m.p {...topDownShowAnimation(0.2)} className='mt-2'>
            Potenti pharetra at, laoreet sit laoreet aliquam 
            lobortis per netus.
          </m.p>
          <m.div 
            {...topDownShowAnimation(0.3)}
            className='w-20 h-[2px] bg-black/10 mt-6'
          />
        </div>
        <div className='grid grid-rows-[auto] grid-cols-1 sm:grid-rows-2 sm:grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-8 lg:gap-5 mt-9'>
          <m.div 
            {...topDownShowAnimation(0.4)} 
            className='relative flex flex-col overflow-hidden'
          >
            <m.div {...leftRightShowAnimation(0.5)} className='hidden lg:flex absolute top-10 left-0 w-full z-0'>
              <div className='w-full h-px bg-black/10' />
              <div className='bg-[#EA4745] w-[0.875rem] h-[0.875rem] rounded-full -translate-y-1/2' />
            </m.div>
            <div className='relative z-10 w-20 h-20 flex-none bg-[#EA4745] rounded-2xl flex items-center justify-center'>
              <Image 
                src={CallIcon}
                alt="Call Icon"
                width={24}
                height={32}
              />
            </div>
            <h3 className='font-inter font-extrabold text-lg mt-5'>Conubia nisi ipsum </h3>
            <p className='mt-2 lg:max-w-56'>
              Curae sem primis hac fames mauris accumsan, 
              per non velit non suspendiss.
            </p>
          </m.div>
          <m.div 
            {...topDownShowAnimation(0.6)} 
            className='relative flex flex-col overflow-hidden'
          >
            <m.div {...leftRightShowAnimation(0.7)} className='hidden lg:flex  absolute top-10 left-0 w-full z-0'>
              <div className='w-full h-px bg-black/10' />
              <div className='bg-[#FE755C] w-[0.875rem] h-[0.875rem] rounded-full -translate-y-1/2 ' />
            </m.div>
            <div className='relative z-10 w-20 h-20 flex-none bg-[#FF5B63] rounded-2xl flex items-center justify-center'>
              <Image 
                src={TruckIcon}
                alt="Truck Icon"
                width={48}
                height={48}
              />
            </div>
            <h3 className='font-inter font-extrabold text-lg mt-5'>Ipsum lobortis</h3>
            <p className='mt-2 lg:max-w-56'>
              Curae sem primis hac fames mauris accumsan, 
              per non velit non suspendiss.
            </p>
          </m.div>
          <m.div 
            {...topDownShowAnimation(0.8)} 
            className='relative flex flex-col overflow-hidden'
          >
            <m.div {...leftRightShowAnimation(0.9)} className='hidden lg:flex absolute top-10 left-0 w-full z-0'>
              <div className='w-full h-px bg-black/10' />
              <div className='bg-[#FF8B6A] w-[0.875rem] h-[0.875rem] rounded-full -translate-y-1/2 ' />
            </m.div>
            <div className='relative z-10 w-20 h-20 flex-none bg-[#FE755C] rounded-2xl flex items-center justify-center'>
              <Image 
                src={CalculatorIcon}
                alt="Calculator Icon"
                width={24}
                height={30}
              />
            </div>
            <h3 className='font-inter font-extrabold text-lg mt-5'>Rutrum vitae augue</h3>
            <p className='mt-2 lg:max-w-56'>
              Curae sem primis hac fames mauris accumsan, 
              per non velit non suspendiss.
            </p>
          </m.div>
          <m.div {...topDownShowAnimation(1)} className='relative flex flex-col'>
            <div className='w-20 h-20 flex-none bg-[#FF8B6A] rounded-2xl flex items-center justify-center'>
              <Image 
                src={HappyIcon}
                alt="Happy Icon"
                width={38}
                height={38}
              />
            </div>
            <h3 className='font-inter font-extrabold text-lg mt-5'>Augue ante vitae</h3>
            <p className='mt-2 lg:max-w-56'>
              Curae sem primis hac fames mauris accumsan, 
              per non velit non suspendiss.
            </p>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default PointsGrid;