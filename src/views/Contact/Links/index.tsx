import React from 'react';
import Image from 'next/image';

import PhoneIcon from 'assets/contact-us/links-phone.svg'
import EmailIcon from 'assets/contact-us/links-email.svg'
import PinIcon from 'assets/contact-us/links-pin.svg'
import { m } from 'framer-motion';
import useScrollAnimation from 'hooks/useScrollAnimation';

const Links: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation(0.4)

  return (
    <section ref={animationRef} className='w-full overflow-hidden mt-6'>
      <m.div {...topDownShowAnimation()} className='container rounded-lg shadow-lg px-10 py-8 grid md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-[3fr,4fr,1px,6fr] gap-10'>
        <a 
          href="tel:7020000000"
          target="_blank" 
          rel="noopener noreferrer"
          className='flex group'
        >
          <div className='w-12 h-[3.75rem] flex-none bg-primary rounded-lg flex items-center justify-center'>
            <Image 
              src={PhoneIcon}
              alt="Phone Icon"
              width={19}
              height={25}
            />
          </div>
          <div className='flex flex-col pt-2 ml-6 text-gray group-hover:text-primary transition-colors duration-300 ease-out'>
            <p className='text-sm'>Call us:</p>
            <strong className='text-base'>702-000-0000</strong>
          </div>
        </a>
        <a 
          href="mailto:contact@cardonum.org"
          target="_blank" 
          rel="noopener noreferrer"
          className='flex group'
        >
          <div className='w-12 h-[3.75rem] flex-none bg-primary rounded-lg flex items-center justify-center'>
            <Image 
              src={EmailIcon}
              alt="Email Icon"
              width={22}
              height={22}
            />
          </div>
          <div className='flex flex-col pt-2 ml-6 text-gray group-hover:text-primary transition-colors duration-300 ease-out'>
            <p className='text-sm'>Email us:</p>
            <strong className='text-base'>contact@cardonum.org</strong>
          </div>
        </a>
        <div className='h-full w-px bg-gray opacity-10 hidden lg:flex'></div>
        <a 
          href="https://goo.gl/maps/u1tkhKGKzxQ4rwjKA"
          target="_blank" 
          rel="noopener noreferrer"
          className='flex group md:col-span-2 lg:col-span-1'
        >
          <div className='w-12 h-[3.75rem] flex-none bg-primary rounded-lg flex items-center justify-center'>
            <Image 
              src={PinIcon}
              alt="Pin Icon"
              width={19}
              height={25}
            />
          </div>
          <div className='flex flex-col md:pt-2 ml-6 text-gray group-hover:text-primary transition-colors duration-300 ease-out'>
            <p className='text-sm'>Headquarters:</p>
            <strong className='text-base'>4855 W Harmon Ave - Las Vegas NV</strong>
          </div>
        </a>
      </m.div>
    </section>
  )
}

export default Links;