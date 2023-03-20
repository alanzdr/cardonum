import React, { useRef, useState } from 'react';
import Image from 'next/image'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { m } from 'framer-motion';

import BackgroundImage from 'assets/home/quotes-background.png'
import BackgroundMobileImage from 'assets/home/quotes-background-mobile.png'
import QuoteIcon from 'assets/donate/quote-icon.svg'
import useScrollAnimation from 'hooks/useScrollAnimation';
import useQuoteData from './useQuoteData';
import QuotesFilledIcon from 'assets/home/quotes-symbol-filled.svg'
import { ReactComponent as Arrow } from 'assets/icons/right-arrow.svg'

const Quotes: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()
  const { data } = useQuoteData()
  
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <section className='pt-16 pb-28 lg:pt-24 lg:pb-36 mt-14 lg:mt-28 w-full relative overflow-hidden'>
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
      <div ref={animationRef} className='relative container'>
        <div className='flex flex-row justify-between'>
          <m.div>
            <m.div {...topDownShowAnimation()} >
              <Image 
                src={QuoteIcon}
                alt="Quote Icon"
                width={76}
                height={48}
              />
            </m.div>
            <m.h2 
              className='mt-5 heading-2 relative max-w-xs'
              {...topDownShowAnimation(0.2)} 
            >
              Lorem ipsum dolor sit amet elit
            </m.h2>
          </m.div>
          <m.div 
            {...topDownShowAnimation(0.3)} 
            className='absolute lg:relative -bottom-[3.25rem] lg:bottom-0 flex justify-between w-full lg:w-max lg:items-end lg:gap-3 '
          >
            <button 
              ref={navigationPrevRef}
              className='w-12 h-12 shadow-lg rounded-lg bg-gradient-to-br from-[#EA4745] to-[#FE8664] flex items-center justify-center text-white transition-opacity duration-300 ease-out hover:opacity-80'
            >
              <Arrow width={6} height={12} className="rotate-180" />
            </button>
            <button 
              ref={navigationNextRef}
              className='w-12 h-12 shadow-lg rounded-lg bg-gradient-to-br from-[#EA4745] to-[#FE8664] flex items-center justify-center text-white transition-opacity duration-300 ease-out hover:opacity-80'
            >
              <Arrow width={6} height={12} />
            </button>
          </m.div>
        </div>
        <m.div className='mt-10' {...topDownShowAnimation(0.5)} >
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Navigation]}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            onBeforeInit={(swiper) => {
              (swiper as unknown as any).params.navigation.prevEl = navigationPrevRef.current; 
              (swiper as unknown as any).params.navigation.nextEl = navigationNextRef.current;
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20
              },
            }}
            className="swiper overflow-visible cursor-grab active:!cursor-grabbing"
          >
            {data.map(item => (
              <SwiperSlide key={`iconed-${item.key}`} >
                <div 
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
                    src={item.image}
                    alt={`${item.name} image`}
                    width={50}
                    height={50}
                    quality={90}
                  />
                  <strong className='text-lg mt-3'>{item.name}</strong>
                  <p className='mt-3 text-sm'>
                    {item.text}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </m.div>
      </div>
    </section>
  )
}

export default Quotes;