import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion';

import PhoneImage from 'assets/home/how-work-phone.svg'
import TruckImage from 'assets/home/how-work-truck.svg'
import CalculatorImage from 'assets/home/how-work-calculator.svg'
import LogoImage from 'assets/home/how-work-logo.svg'
import SmileImage from 'assets/home/how-work-smile.svg'
import SmileMobileImage from 'assets/home/how-work-smile-mobile.svg'
import SmileBackgroundImage from 'assets/home/how-work-smile-background.svg'
import RightArrowImage from 'assets/home/how-work-right-arrow.svg'
import DownArrowImage from 'assets/home/how-work-down-arrow.svg'
import useScrollAnimation from 'hooks/useScrollAnimation';

const HowItWorks: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section className='py-24 md:pb-32 w-full overflow-hidden'>
      <div ref={animationRef} className='container'>
        <m.div 
          {...topDownShowAnimation()} 
          className="text-center lg:text-left"
        >
          <h2 className='heading'>How it works</h2>
          <p className='mt-2'>Lorem ipsum dolor sit amet. In deleniti nisi rem.</p>
        </m.div>
        <div className='mt-12 grid grid-rows-4 grid-cols-1 lg:grid-rows-1 lg:grid-cols-4 gap-12 lg:gap-8'>
          <m.div 
            {...topDownShowAnimation(0.2)} 
            className='z-30 flex flex-col items-center relative pt-14 pb-12 px-8 rounded-md bg-white shadow-lg'
          >
            <div className='bg-[#FE8664] rounded-md w-[6.25rem] h-[2.25rem] flex items-center  justify-center absolute left-1/2 -translate-x-1/2 -top-2'>
              <p className='text-sm text-white font-extrabold tracking-wider'>Step 1</p>
            </div>
            <div className='w-20 h-20 bg-[#f6f7f9] rounded-full flex items-center justify-center'>
              <Image 
                src={PhoneImage}
                alt="Phone icon"
                width={24}
                height={32}
              />
            </div>
            <p className='text-center text-base mt-5'>
              You give us a <b>call</b> or <b>donate</b> your vehicle <b>online</b>.
            </p>
            <m.div 
              {...topDownShowAnimation(0.3)} 
              className="absolute left-1/2 -bottom-3 lg:bottom-auto lg:left-auto lg:top-16 lg:-right-14"
            >
              <Image 
                src={RightArrowImage}
                alt="Right Arrow"
                width={71}
                height={29}
                className="-translate-x-5 lg:translate-x-0 rotate-90 lg:rotate-0 "
              />
            </m.div>
          </m.div>
          <m.div 
            {...topDownShowAnimation(0.4)} 
            className='z-20 flex flex-col items-center relative pt-14 pb-12 px-8 rounded-md bg-white shadow-lg'
          >
            <div className='bg-[#F8694F] rounded-md w-[6.25rem] h-[2.25rem] flex items-center  justify-center absolute left-1/2 -translate-x-1/2 -top-2'>
              <p className='text-sm text-white font-extrabold tracking-wider'>Step 2</p>
            </div>
            <div className='w-20 h-20 bg-[#f6f7f9] rounded-full flex items-center justify-center'>
              <Image 
                src={TruckImage}
                alt="Truck icon"
                width={52}
                height={52}
              />
            </div>
            <p className='text-center text-base mt-5 px-4'>
              <b>We tow</b> your 
              vehicle at <b>no costs </b>
              to you.
            </p>
            <m.div 
              {...topDownShowAnimation(0.5)} 
              className="absolute z-20 left-1/2 -bottom-3 lg:bottom-auto lg:left-auto lg:top-16 lg:-right-14">
              <Image 
                src={RightArrowImage}
                alt="Right Arrow"
                width={71}
                height={29}
                className="-translate-x-5 lg:translate-x-0  rotate-90 lg:rotate-0 "
              />
            </m.div>
          </m.div>
          <m.div 
            {...topDownShowAnimation(0.6)} 
            className='z-10 flex flex-col items-center relative pt-14 pb-12 px-8 rounded-md bg-white shadow-lg'
          >
            <div className='bg-[#F6595E] rounded-md w-[6.25rem] h-[2.25rem] flex items-center  justify-center absolute left-1/2 -translate-x-1/2 -top-2'>
              <p className='text-sm text-white font-extrabold tracking-wider'>Step 3</p>
            </div>
            <div className='w-20 h-20 bg-[#f6f7f9] rounded-full flex items-center justify-center'>
              <Image 
                src={CalculatorImage}
                alt="Calculator icon"
                width={24}
                height={30}
              />
            </div>
            <p className='text-center text-base mt-5'>
              You get a <b>tax deduction</b> and a <b>vacation voucher.</b>
            </p>
            <m.div 
              {...topDownShowAnimation(0.7)} 
              className="absolute z-20 left-1/2 -bottom-3 lg:bottom-auto lg:left-auto lg:top-16 lg:-right-14">
              <Image 
                src={RightArrowImage}
                alt="Right Arrow"
                width={71}
                height={29}
                className="-translate-x-5 lg:translate-x-0 rotate-90 lg:rotate-0 "
              />
            </m.div>
          </m.div>
          <m.div 
            {...topDownShowAnimation(0.8)} 
            className='flex flex-col items-center relative pt-14 pb-12 lg:pb-6 px-8 rounded-md bg-white shadow-lg'
          >
            <div className='bg-[#D42F3D] rounded-md w-[6.25rem] h-[2.25rem] flex items-center  justify-center absolute left-1/2 -translate-x-1/2 -top-2'>
              <p className='text-sm text-white font-extrabold tracking-wider'>Step 4</p>
            </div>
            <div className='w-20 h-20 bg-[#f6f7f9] rounded-full flex items-center justify-center'>
              <Image 
                src={LogoImage}
                alt="CarDonum Logo"
                width={43}
                height={35}
              />
            </div>
            <p className='text-center text-base mt-5'>
              <b>Choose where</b> you would like your <b>donation</b> to be <b>allocated</b>.
            </p>
          </m.div>
        </div>
        <div className='relative w-full pt-28 flex justify-center'>
          <m.div 
            className='absolute -top-2 lg:top-5 right-28'
            {...topDownShowAnimation(0.9)} 
          >
            <Image 
              src={DownArrowImage}
              alt="Down Arrow"
              width={117}
              height={116}
              className="-rotate-[30deg] w-[5.1875rem] h-[5.1875rem] lg:rotate-0 lg:w-[7.3125] lg:h-[7.25rem]"
            />
          </m.div>
          <m.div 
            {...topDownShowAnimation(1.1)}
            className='relative flex flex-col md:flex-row items-center md:items-start'
          >
            <div 
              className='hidden lg:flex w-[14.8125rem] h-px absolute top-[37%] -left-6 -translate-x-full bg-[#D2D6E5]'
            />
            <div className='w-[26.75rem] h-[24.375rem] md:w-[33.25rem] md:h-[30.25rem] absolute -z-10 -top-20 md:-top-[11.75rem] right-1/2 translate-x-1/2 md:translate-x-0 md:-right-[2.60rem]'>
              <Image 
                src={SmileBackgroundImage}
                width={532}
                height={484}
                alt="Gray Background"
                className='w-full h-full'
              />
            </div>
            <Image 
              src={SmileImage}
              alt="Smile"
              width={179}
              height={187}
              className="hidden md:flex"
            />
            <Image 
              src={SmileMobileImage}
              alt="Smile"
              width={126}
              height={96}
              className="md:hidden relative -left-3"
            />
            <div className='text-center mt-3 max-w-[20rem] md:text-left md:max-w-[20.1875rem] md:mt-0 md:ml-14'>
              <h3 className='text-[2.5rem]'>Outcome</h3>
              <p className='mt-2'>
                <b>Receive a report detailing the positive impact </b>
                that your donation has had on individuals facing 
                difficult circumstances
              </p>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks;