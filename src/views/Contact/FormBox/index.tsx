import React from 'react';
import Image from 'next/image';

import Form from './Form'

import PinIcon from 'assets/contact-us/form-pin.svg'
import FormIcon from 'assets/contact-us/form-icon.svg'
import MapImage from 'assets/contact-us/form-map.png'
import { ReactComponent as LinkIcon } from 'assets/icons/link-blank.svg'
import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';

const FormBox: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section ref={animationRef} className='pb-8 mt-14 md:mt-20'>
      <div className='container grid grid-rows-[auto] grid-cols-1 md:grid-cols-2 gap-10'>
        <m.div {...topDownShowAnimation()} className='bg-white shadow-lg rounded-lg flex flex-col p-8 md:p-14'>
          <div className='w-12 h-[3.75rem] flex-none bg-primary rounded-lg flex items-center justify-center'>
            <Image 
              src={FormIcon}
              alt="Form Icon"
              width={21}
              height={25}
            />
          </div>
          <h2 className='text-3xl mt-4'>Contact form:</h2>
          <div className='w-20 h-px bg-black opacity-20 mt-7'/>
          <Form />
        </m.div>
        <m.a
          {...topDownShowAnimation(0.2)}
          href="https://goo.gl/maps/u1tkhKGKzxQ4rwjKA"
          target="_blank" 
          rel="noopener noreferrer"
          className='relative group overflow-hidden rounded-lg shadow-lg bg-[#1C1D25] min-h-[28rem]'
        >
          <Image 
            src={MapImage}
            alt="Location Map"
            className='absolute opacity-80 top-0 left-0 w-full h-full object-cover object-center transition-transform duration-300 ease-out group-hover:scale-110'
          />
          <div className='relative z-10 p-8 md:px-10 md:py-16 flex flex-col justify-between items-center h-full w-full'>
            <div className='text-center flex flex-col items-center'>
              <h3 className='text-3xl text-white'>Headquarters</h3>
              <div className='w-20 h-px bg-white opacity-20 mt-7'/>
            </div>
            <Image 
              src={PinIcon}
              alt="Pin Icon"
              width={32}
              height={52}
            />
            <div className='flex items-center bg-[#0F1015] px-6 py-5 bg-opacity-50 rounded-bubble' >
              <p className='text-white text-sm'>
                4855 W Harmon Ave - <b>Las Vegas NV</b> 89103-5220
              </p>
              <LinkIcon 
                width={14}
                height={14}
                className="ml-2 flex-none"
              />
            </div>
          </div>
        </m.a>
      </div>
    </section>
  )
}

export default FormBox;