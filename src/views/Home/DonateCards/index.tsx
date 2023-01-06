import React from 'react';
import Image from 'next/image'

import CharityIcon from 'assets/home/donate-charity-icon.svg'
import MoneyIcon from 'assets/home/donate-money-icon.svg'
import FlowerIcon from 'assets/home/donate-flower-icon.svg'
import { ReactComponent as RightIcon } from 'assets/icons/right-arrow-large.svg'
import styles from './Donate.module.css'
import classNames from 'classnames';
import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';

const DonateCards: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section className='py-14 lg:py-28'>
      <div ref={animationRef} className='container'>
        <m.div {...topDownShowAnimation()} className='flex flex-row items-end'>
          <h2 className='text-[2rem] lg:heading max-w-[13.1875rem] lg:max-w-[17.5rem]'>
            Lorem ipsum dolor sit amet 
          </h2>
          <div 
            className='relative ml-5 lg:ml-1 -top-5 w-20 h-px bg-[#D4D6E1] flex-none'
          />
        </m.div>
        <div className='mt-8 lg:mt-12 grid grid-rows-[auto] md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-11'>
          <m.div {...topDownShowAnimation(0.2)} className='bg-white shadow-lg rounded-xl p-10 lg:px-12 lg:py-[3.375rem] lg:pb-12 flex flex-col'>
            <div className='bg-[#ebebeb] w-20 h-20 rounded-full flex items-center justify-center'>
              <Image 
                src={CharityIcon}
                alt="Charity Icon"
                width={36.19}
                height={38}
              />
            </div>
            <strong className='mt-6 text-lg'>Expedita aut elit amet voluptatem</strong>
            <p className='mt-5'>
              Lorem ipsum dolor sit amet. In deleniti nisi rem 
              commodi quasi et ipsam libero ut expedita 
              cupiditate sit modi iusto et quasi dolores 
              ut doloremque.
            </p>
            <a 
              href="#" 
              className='group mt-6 inline-flex items-center text-primary hover:text-primary-dark'
            >
              <span className='underline font-extrabold text-base'>Donate</span>
              <RightIcon className='ml-2 w-4 h-[0.6875rem] relative transition-[left] left-0 duration-300 ease-out group-hover:left-3'/>
            </a>
          </m.div>
          <m.div {...topDownShowAnimation(0.4)} className={classNames('shadow-lg rounded-xl p-10 lg:px-12 lg:py-[3.375rem] lg:pb-12 flex flex-col', styles.orangeCard)}>
            <div className='bg-[#e04a56] w-20 h-20 rounded-full flex items-center justify-center'>
              <Image 
                src={MoneyIcon}
                alt="Walley Icon"
                width={40}
                height={28.57}
              />
            </div>
            <strong className='mt-6 text-lg text-white'>Expedita aut elit amet voluptatem</strong>
            <p className='mt-5 text-white'>
              Lorem ipsum dolor sit amet. In deleniti nisi rem 
              commodi quasi et ipsam libero ut expedita 
              cupiditate sit modi iusto et quasi dolores 
              ut doloremque.
            </p>
            <a 
              href="#" 
              className='group mt-6 inline-flex items-center text-white hover:text-white/80'
            >
              <span className='underline font-extrabold text-base'>Donate</span>
              <RightIcon className='ml-2 w-4 h-[0.6875rem] relative transition-[left] left-0 duration-300 ease-out group-hover:left-3'/>
            </a>
          </m.div>
          <m.div {...topDownShowAnimation(0.6)} className='bg-white shadow-lg rounded-xl p-10 lg:px-12 lg:py-[3.375rem] lg:pb-12 flex flex-col md:col-span-2 lg:col-span-1'>
            <div className='bg-[#ebebeb] w-20 h-20 rounded-full flex items-center justify-center'>
              <Image 
                src={FlowerIcon}
                alt="Flower Icon"
                width={30}
                height={42}
              />
            </div>
            <strong className='mt-6 text-lg'>Expedita aut elit amet voluptatem</strong>
            <p className='mt-5'>
              Lorem ipsum dolor sit amet. In deleniti nisi rem 
              commodi quasi et ipsam libero ut expedita 
              cupiditate sit modi iusto et quasi dolores 
              ut doloremque.
            </p>
            <a 
              href="#" 
              className='group mt-6 inline-flex items-center text-primary hover:text-primary-dark'
            >
              <span className='underline font-extrabold text-base'>Donate</span>
              <RightIcon className='ml-2 w-4 h-[0.6875rem] relative transition-[left] left-0 duration-300 ease-out group-hover:left-3'/>
            </a>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default DonateCards;