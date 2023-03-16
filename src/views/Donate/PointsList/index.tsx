import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion';

import BackgroundImage from 'assets/home/quotes-background.png'
import BackgroundMobileImage from 'assets/home/quotes-background-mobile.png'
import ListIcon from 'assets/donate/points-list-icon.svg'
import KidImage from 'assets/donate/points-list-image.png'
import useScrollAnimation from 'hooks/useScrollAnimation';

const PointsList: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation(0.4)

  return (
    <section className='relative py-8 lg:mt-12 lg:py-12'>
      <Image 
        src={BackgroundImage}
        alt="background gradient"
        className="hidden md:flex w-full h-full absolute left-0 top-0 object-cover"
      />
      <Image 
        src={BackgroundMobileImage}
        alt="background gradient"
        className="md:hidden w-full h-full absolute left-0 top-0 object-cover"
      />
      <div 
        ref={animationRef} 
        className='relative z-20 grid container grid-rows-[auto] gap-10 lg:grid-rows-1 lg:grid-cols-[8fr,7fr] lg:gap-16'
      >
        <m.div 
          {...topDownShowAnimation()} 
          className='flex justify-center lg:justify-start items-center'
        >
          <Image 
            src={KidImage}
            alt="Kid"
            width={540}
            height={685}
            quality={90}
          />
        </m.div>
        <div className='flex flex-col justify-center'>
          <m.div  
            className='flex flex-row'
            {...topDownShowAnimation(0.2)}  
          >
            <h3 className='heading-2 relative max-w-xs'>
              Fermentum vel justo lacus sodales vitae
            </h3>
          </m.div>
          <div className='mt-8 max-w-[27.125rem]'>
            <m.p {...topDownShowAnimation(0.4)} className="font-extrabold">
              Lorem ipsum aenean in torquent commodo enim lorem ante, 
              rutrum vitae augue ante vitae.
            </m.p>
            <m.p {...topDownShowAnimation(0.6)} className='mt-8'>
              Potenti pharetra at, laoreet sit laoreet aliquam 
              lobortis per netus.
            </m.p>
          </div>
          <ul className='mt-9 flex flex-col gap-6'>
            <m.li {...topDownShowAnimation(0.8)} className='flex'>
              <Image 
                src={ListIcon}
                alt="List arrow"
                width={26}
                height={26}
                className="flex-none"
              />
              <p className='ml-5'>
                <b>Lorem ipsum aenean</b> in torquent commodo enim 
                lorem ante, rutrum vitae augue ante vitae.
              </p>
            </m.li>
            <m.li {...topDownShowAnimation(0.9)} className='flex'>
              <Image 
                src={ListIcon}
                alt="List arrow"
                width={26}
                height={26}
                className="flex-none"
              />
              <p className='ml-5'>
                <b>Pharetra at,</b> laoreet sit laoreet aliquam lobortis 
                per netus web elit amet.
              </p>
            </m.li>
            <m.li {...topDownShowAnimation(1)} className='flex'>
              <Image 
                src={ListIcon}
                alt="List arrow"
                width={26}
                height={26}
                className="flex-none"
              />
              <p className='ml-5'>
                <b>Lorem ipsum aenean</b> in torquent commodo enim 
                lorem ante, rutrum vitae augue ante vitae.
              </p>
            </m.li>
            <m.li {...topDownShowAnimation(1.1)} className='flex'>
              <Image 
                src={ListIcon}
                alt="List arrow"
                width={26}
                height={26}
                className="flex-none"
              />
              <p className='ml-5'>
                <b>Laoreet otenti pharetra at,</b> laoreet sit laoreet 
                aliquam lobortis per netus.
              </p>
            </m.li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default PointsList;