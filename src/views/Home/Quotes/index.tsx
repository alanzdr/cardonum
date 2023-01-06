import React from 'react'
import Image from 'next/image'

import BackgroundImage from 'assets/home/quotes-background.png'
import BackgroundMobileImage from 'assets/home/quotes-background-mobile.png'
import QuotesOutlinedIcon from 'assets/home/quotes-symbol-outlined.svg'
import QuotesFilledIcon from 'assets/home/quotes-symbol-filled.svg'
import { ReactComponent as RightIcon } from 'assets/icons/right-arrow-large.svg'
import Person00Image from 'assets/home/quotes-person-00.png'
import Person01Image from 'assets/home/quotes-person-01.png'
import Person02Image from 'assets/home/quotes-person-02.png'
import Person03Image from 'assets/home/quotes-person-03.png'
import useScrollAnimation from 'hooks/useScrollAnimation'
import { m } from 'framer-motion'

const Quotes: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section className='py-16 lg:py-28 w-full relative'>
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
      <div ref={animationRef} className='relative z-10 container grid grid-rows-[auto] lg:grid-cols-[1fr,3fr] gap-10 lg:gap-24'>
        <m.div {...topDownShowAnimation()} className='flex flex-col'>
          <Image 
            src={QuotesOutlinedIcon}
            alt="quote"
            width={76}
            height={48}
          />
          <h2 className='heading mt-6'>
            Lorem ipsum dolor sit amet 
          </h2>
          <a 
            href="#" 
            className='hidden lg:inline-flex group mt-6 items-center text-primary hover:text-primary-dark'
          >
            <span className='underline font-extrabold text-base'>Donate today</span>
            <RightIcon className='ml-2 w-4 h-[0.6875rem] relative transition-[left] left-0 duration-300 ease-out group-hover:left-3'/>
          </a>
        </m.div>
        <div className='grid grid-rows-[auto] sm:grid-cols-2 gap-10'>
          <m.div 
            {...topDownShowAnimation(0.2)}
            className='relative bg-white shadow-lg rounded-xl p-9 flex flex-col'
          >
            <Image 
              src={QuotesFilledIcon}
              alt="Quote"
              width={76}
              height={48}
              className="absolute top-0 right-1"
            />
            <Image 
              src={Person00Image}
              alt="John Smith"
              width={50}
              height={50}
              quality={90}
            />
            <strong className='text-lg mt-3'>John Smith</strong>
            <p className='mt-3 text-sm'>
              Lorem ipsum dolor sit amet. In deleniti nisi rem 
              commodi quasi et ipsam libero ut expedita cupiditate.
            </p>
          </m.div>
          <m.div 
            {...topDownShowAnimation(0.4)} 
            className='relative bg-white shadow-lg rounded-xl p-9 flex flex-col'
          >
            <Image 
              src={QuotesFilledIcon}
              alt="Quote"
              width={76}
              height={48}
              className="absolute top-0 right-1"
            />
            <Image 
              src={Person01Image}
              alt="Mary Smith"
              width={50}
              height={50}
              quality={90}
            />
            <strong className='text-lg mt-3'>Mary Smith</strong>
            <p className='mt-3 text-sm'>
              Lorem ipsum dolor sit amet. In deleniti nisi rem 
              commodi quasi et ipsam libero ut expedita cupiditate.
            </p>
          </m.div>
          <m.div 
            {...topDownShowAnimation(0.6)} 
            className='relative bg-white shadow-lg rounded-xl p-9 flex flex-col'
          >
            <Image 
              src={QuotesFilledIcon}
              alt="Quote"
              width={76}
              height={48}
              className="absolute top-0 right-1"
            />
            <Image 
              src={Person02Image}
              alt="Robert Smith"
              width={50}
              height={50}
              quality={90}
            />
            <strong className='text-lg mt-3'>Robert Smith</strong>
            <p className='mt-3 text-sm'>
              Lorem ipsum dolor sit amet. In deleniti nisi rem 
              commodi quasi et ipsam libero ut expedita cupiditate.
            </p>
          </m.div>
          <m.div 
            {...topDownShowAnimation(0.8)} 
            className='relative bg-white shadow-lg rounded-xl p-9 flex flex-col'
          >
            <Image 
              src={QuotesFilledIcon}
              alt="Quote"
              width={76}
              height={48}
              className="absolute top-0 right-1"
            />
            <Image 
              src={Person03Image}
              alt="Kate Smith"
              width={50}
              height={50}
              quality={90}
            />
            <strong className='text-lg mt-3'>Kate Smith</strong>
            <p className='mt-3 text-sm'>
              Lorem ipsum dolor sit amet. In deleniti nisi rem 
              commodi quasi et ipsam libero ut expedita cupiditate.
            </p>
          </m.div>
        </div>
        <m.div 
          className='flex justify-center lg:hidden'
          {...topDownShowAnimation(1)} 
        >
          <a 
            href="#" 
            className='text-center inline-flex underline font-extrabold text-base items-center text-primary hover:text-primary-dark'
          >
            Donate today
          </a>
        </m.div>
      </div>
    </section>
  );
}

export default Quotes;