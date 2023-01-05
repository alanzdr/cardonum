import React from 'react';
import Image from 'next/image'

import ToyIcon from 'assets/home/profound-toys-icon.svg'
import KidImage from 'assets/home/profound-toys-image.png'
import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';

const ProvideToys: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation(0.4)

  return (
    <div className='container mt-20'>
      <div 
        ref={animationRef} 
        className='grid grid-rows-[auto] gap-10 lg:grid-rows-1 lg:grid-cols-[7fr,8fr] lg:gap-24'
      >
        <div className='flex flex-col row-start-2 lg:row-start-1'>
          <m.div  
            className='flex flex-row items-center'
            {...topDownShowAnimation()}  
          >
            <div className='w-12 h-[4.75rem] flex-none bg-primary rounded-lg flex items-center justify-center'>
              <Image 
                src={ToyIcon}
                alt="Toy Icon"
                width={22.77}
                height={19.97}
              />
            </div>
            <h3 className='heading-2 ml-7'>
              Provide toys to children with cancer
            </h3>
          </m.div>
          <div className='mt-8'>
            <m.p {...topDownShowAnimation(0.2)} className="font-extrabold">
              Donating your car to buy toys for cancer 
              patients is an incredibly rewarding experience.
            </m.p>
            <m.p {...topDownShowAnimation(0.4)} className='mt-8'>
              Not only will you be helping to bring joy to 
              children who are fighting a difficult battle, 
              but you will also be making a real difference 
              in their lives. By donating your car, you can 
              help provide them with a much-needed distraction 
              from the pain and stress of their treatment.
            </m.p>
            <m.p {...topDownShowAnimation(0.6)} className='mt-8'>
              With your donation, you can help bring smiles 
              and laughter to children who need it the most. 
              And it doesn’t have to cost you a penny.
            </m.p>
          </div>
        </div>
        <m.div 
          {...topDownShowAnimation(0.8)} 
          className='flex justify-center lg:justify-end items-center'
        >
          <Image 
            src={KidImage}
            alt="child with mask"
            width={492}
            height={454}
          />
        </m.div>
      </div>
    </div>
  );
}

export default ProvideToys;