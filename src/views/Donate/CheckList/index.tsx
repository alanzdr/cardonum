import Button from 'components/Button';
import React from 'react';
import Image from 'next/image';
import { m } from 'framer-motion';

import Background from './Background';
import useScrollAnimation from 'hooks/useScrollAnimation';
import CarIcon from 'assets/donate/check-list-icon.svg'
import { ReactComponent as CheckIcon } from 'assets/icons/check.svg'

const CheckList: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  const listItems = [
    "Lorem ipsum aenean in  commodo enim.",
    "Commodo ipsum aenean in amet elit web.",
    "Lorem ipsum aenean in  commodo enim.",
    "Commodo ipsum aenean in amet elit web.",
    "Lorem ipsum aenean in  commodo enim.",
    "Commodo ipsum aenean in amet elit web.",
    "Ipsum aenean in amet elit commodo enim.",
    "Lorem ipsum aenean in  commodo enim."
  ]

  return (
    <section className="relative pt-[33rem] pb-16 sm:py-32 mt-20 w-full lg:overflow-hidden">
      <Background animation={topDownShowAnimation} />
      <div ref={animationRef} className='container relative z-10'>
        <div className='max-w-[21rem] md:max-w-[32rem] lg:max-w-[39rem] xl:max-w-[44.25rem]'>
          <m.div {...topDownShowAnimation(0.2)}>
            <Image 
              src={CarIcon}
              alt="Car Icon"
              width={71}
              height={71}
            />
          </m.div>
          <m.h2 {...topDownShowAnimation(0.3)} className='mt-2 text-2xl font-extrabold md:text-4xl md:leading-[2.75rem] max-w-[25.7rem]'>
            Lorem ipsum dolor sit amet
          </m.h2>
          <m.p {...topDownShowAnimation(0.4)} className='mt-8'>
            The majority of the proceeds from car donations 
            are allocated to the following areas.
          </m.p>
          <div className='grid grid-rows-[auto] lg:grid-cols-2 mt-6 md:mt-10 gap-6 lg:gap-8'>
            {listItems.map((item, index) => (
              <m.div
                key={`check-list-item-${index}`}
                className="flex gap-4 bg-white shadow-sm rounded-xl p-6"
                {...topDownShowAnimation(0.5 + index * 0.1)}
              >
                <div className='flex-none text-[#41CC60] w-12 h-12 flex items-center justify-center border-2 rounded-lg'>
                  <CheckIcon 
                    width={16}
                    height={12}
                  />
                </div>
                <p>{item}</p>
              </m.div>
            ))}
          </div>
          <m.div 
            className='mt-8 lg:mt-10 flex flex-col md:grid md:grid-cols-2 lg:gap-12'
            {...topDownShowAnimation(0.6 + (listItems.length * 0.1))}
          >
            <div className='flex flex-row'>
              <div 
                className='relative top-[0.875rem] w-10 lg:w-12 h-px bg-[#1C1D25] flex-none'
              />
              <h3 className='ml-5 text-xl max-w-[21.4375rem]'>Donate today and make an impact in someone&apos;s life! </h3>
            </div>
            <div className='w-full mx-auto mt-8 max-w-[19.375rem] md:m-0 '>
              <Button
                component='a' 
                href='/#donate-today'
                className="w-full"
              >
                Donate today
              </Button>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default CheckList;