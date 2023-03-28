import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion';

import BackgroundImage from 'assets/donate/cta-box-background.png'
import BackgroundMobileImage from 'assets/donate/cta-box-background-mobile.png'
import LogoImage from 'assets/donate/cta-box-logo.svg'
import Button from 'components/Button';
import useScrollAnimation from 'hooks/useScrollAnimation';
import { ReactComponent as TelIcon } from 'assets/icons/cell.svg'


const CtaBox: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()
  
  return (
    <section className='py-12 lg:py-20 container'>
      <div ref={animationRef}>
        <m.div 
          {...topDownShowAnimation()}
          className='px-9 py-10 lg:px-14 lg:py-16 relative rounded-2xl shadow-lg overflow-hidden'
        >
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
          <div className='relative z-10 grid grid-rows-[auto] grid-cols-1 lg:grid-cols-[86px,auto,250px] gap-6'>
            <div>
              <Image 
                src={LogoImage}
                alt="background gradient"
                width={86}
                height={86}
              />
            </div>
            <div className='max-w-[28.75rem] text-white'>
              <h2 className='text-2xl max-w-40 lg:max-w-full lg:text-[2.5rem] lg:leading-none' >
                Lorem ipsum dolor sit amet consectutier
              </h2>
              <p className='mt-5'>
                Potenti pharetra at, laoreet sit laoreet aliquam 
                lobortis per netus. id mi ullamcorper egestas 
                senectus torquen.
              </p>
            </div>
            <div>
              <Button 
                className='w-full' 
                component='a' 
                href='/#donate-today'
              >
                Donate today
              </Button>
              <a 
                className='flex flex-col items-center text-center mt-5 text-white hover:opacity-80 transition-opacity duration-300 ease-out'
                href="tel:7020000000"
              >
                <TelIcon className='w-[0.875rem]' />
                <p className='text-sm mt-1'>Or <b>call us:</b></p>
                <strong className='border-b-[1px] text-xl'>702-000-0000</strong>
              </a>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  )
}

export default CtaBox;