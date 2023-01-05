import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion';

import MealsIcon from 'assets/home/profound-meals-icon.svg'
import WomanImage from 'assets/home/profound-meals-image.png'
import useScrollAnimation from 'hooks/useScrollAnimation';
import styled from './meals.module.css'
import classNames from 'classnames';

const MealsToFamilies: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation(0.4)

  return (
    <div className={classNames('mt-12 py-12 lg:mt-20 lg:py-24', styled.background)}>
      <div 
        ref={animationRef} 
        className='grid container grid-rows-[auto] gap-10 lg:grid-rows-1 lg:grid-cols-[8fr,7fr] lg:gap-24'
      >
        <m.div 
          {...topDownShowAnimation()} 
          className='flex justify-center lg:justify-start items-center'
        >
          <Image 
            src={WomanImage}
            alt="mother with daughter on her lap"
            width={492}
            height={454}
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
                src={MealsIcon}
                alt="food Icon"
                width={22.24}
                height={26.15}
              />
            </div>
            <h3 className='heading-2 ml-7 relative -top-2 max-w-xs'>
              Meals to families struggling to put food 
              on the table
            </h3>
          </m.div>
          <div className='mt-8'>
            <m.p {...topDownShowAnimation(0.4)} className="font-extrabold">
              Donating your car to help provide meals to families 
              struggling to put food on the table is a great way 
              to make a real difference in the lives of those in 
              need.
            </m.p>
            <m.p {...topDownShowAnimation(0.6)} className='mt-8'>
              Your donation will help provide hot, nutritious 
              meals to families who otherwise would go hungry. 
              Not only will your donation help provide meals to 
              those in need, but it will also provide them with 
              the opportunity to regain their independence and 
              dignity.
            </m.p>
            <m.p {...topDownShowAnimation(0.8)} className='mt-8'>
              Best of all, donating your car is a hassle-free 
              process that can be completed in a matter of minutes.
            </m.p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MealsToFamilies;