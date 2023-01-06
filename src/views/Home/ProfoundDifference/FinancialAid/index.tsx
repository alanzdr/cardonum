import React from 'react';
import Image from 'next/image'

import MedalIcon from 'assets/home/profound-financial-icon.svg'
import FlagImage from 'assets/home/profound-financial-image.png'
import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';

const FinancialAid: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation(0.4)

  return (
    <div className='container mt-16'>
      <div 
        ref={animationRef} 
        className='grid grid-rows-[auto] gap-10 lg:grid-rows-1 lg:grid-cols-[7fr,8fr] lg:gap-24'
      >
        <div className='flex flex-col justify-center row-start-2 lg:row-start-1'>
          <m.div  
            className='flex flex-row items-center '
            {...topDownShowAnimation(0.2)}  
          >
            <div className='w-12 h-[4.75rem] flex-none bg-primary rounded-lg flex items-center justify-center'>
              <Image 
                src={MedalIcon}
                alt="Medal Icon"
                width={18}
                height={27}
              />
            </div>
            <h3 className='heading-2 ml-7 max-w-xs'>
              Financial aid to disabled veterans
            </h3>
          </m.div>
          <div className='mt-8 lg:max-w-[27.75rem]'>
            <m.p {...topDownShowAnimation(0.4)} className="font-extrabold">
              If you&apos;re looking for a way to give back to 
              disabled veterans, consider donating your car to 
              go to give financial aid.
            </m.p>
            <m.p {...topDownShowAnimation(0.6)} className='mt-8'>
              With your generous donation, you can help provide 
              education and job training resources to disabled 
              veterans in need.
            </m.p>
            <m.p {...topDownShowAnimation(0.8)} className='mt-8'>
              Not only will you be helping your fellow veterans, 
              but you‘ll also be eligible for a tax deduction 
              on your donated vehicle. 
            </m.p>
          </div>
        </div>
        <m.div 
          {...topDownShowAnimation()} 
          className='flex justify-center lg:justify-end items-center'
        >
          <Image 
            src={FlagImage}
            alt="hands with american flag"
            width={468}
            height={495}
          />
        </m.div>
      </div>
    </div>
  );
}

export default FinancialAid;