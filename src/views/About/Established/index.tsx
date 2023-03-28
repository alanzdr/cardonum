import React from 'react';
import Image from 'next/image'

import ToyIcon from 'assets/about/established-icon.svg'
import EstablishedImage from 'assets/about/established-image.png'

import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';

const Established: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section className='container mt-5'>
      <div 
        ref={animationRef} 
        className='grid grid-rows-[auto] gap-10 lg:grid-rows-1 lg:grid-cols-[8fr,7fr] lg:gap-12'
      >
        <div className='flex flex-col justify-center row-start-2 lg:row-start-1'>
          <m.div  
            className='flex flex-row items-center'
            {...topDownShowAnimation(0.2)}  
          >
            <div className='w-12 h-[4.75rem] flex-none bg-primary rounded-lg flex items-center justify-center'>
              <Image 
                src={ToyIcon}
                alt="Establish Icon"
                width={26}
                height={26}
              />
            </div>
            <h2 className='heading-2 ml-7 max-w-56'>
              Established in 2022
            </h2>
          </m.div>
          <div className='mt-8 lg:pl-[4.8rem] max-w-[33rem]'>
            <m.p {...topDownShowAnimation(0.4)} className="font-extrabold">
              Nathan Nehoraoff and a dedicated team of business 
              professionals have come together with a mission to 
              make an impact on the world. 
            </m.p>
            <m.p {...topDownShowAnimation(0.6)} className='mt-8'>
              Drawing from their collective expertise in managing 
              successful businesses, they are now working to expand 
              their non-profit organization, striving to create 
              positive change and improve the lives of those in need.
            </m.p>
          </div>
        </div>
        <m.div 
          {...topDownShowAnimation()} 
          className='flex justify-center lg:justify-end items-center'
        >
          <Image 
            src={EstablishedImage}
            alt="disabled children with solidarity symbols around"
            width={477}
            height={510}
            quality={90}
          />
        </m.div>
      </div>
    </section>
  );
}

export default Established;