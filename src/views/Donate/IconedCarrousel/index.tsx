import React, { useRef, useState } from 'react';
import Image from 'next/image'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { m } from 'framer-motion';

import FlowerIcon from 'assets/contact-us/delighted-icon.svg'
import useScrollAnimation from 'hooks/useScrollAnimation';
import useIconedData from './useIconedData';
import classNames from 'classnames';
import { ReactComponent as Arrow } from 'assets/icons/right-arrow.svg'

const IconedCarrousel: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()
  const { data } = useIconedData()
  
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)

  return (
    <section className='pt-2 lg:pt-14 pb-20 overflow-hidden'>
      <div ref={animationRef} className='relative container'>
        <div className='flex flex-row justify-between'>
          <m.div>
            <m.div {...topDownShowAnimation()} >
              <Image 
                src={FlowerIcon}
                alt="Flower Icon"
                width={46}
                height={48}
              />
            </m.div>
            <m.h2 
              className='mt-5 heading-2 relative max-w-xs'
              {...topDownShowAnimation(0.2)} 
            >
              Conubia nisi ipsum consequat etiam
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
            slidesPerView={1.2}
            spaceBetween={24}
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
                slidesPerView: 4,
                spaceBetween: 32
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 32
              },
            }}
            className="swiper overflow-visible cursor-grab active:!cursor-grabbing"
          >
            {data.map(item => (
              <SwiperSlide key={`iconed-${item.key}`} >
                <div className='rounded-lg bg-[#FF7F5B] shadow-lg h-full'>
                  <div className={classNames('bg-white h-full rounded-lg translate-y-1 py-10 px-8', {
                    "bg-gradient-to-br from-[#EA4745] to-[#FE8664]": item.orangeBackground
                  })}>
                    <div className={classNames('bg-[#EBECF0] rounded-full w-16 h-16 flex items-center justify-center', {
                      "bg-white": item.orangeBackground
                    })}>
                      <Image 
                        src={item.icon}
                        alt="Icon"
                        width={32}
                        height={32}
                      />
                    </div>
                    <p className={classNames('mt-5', {
                      "text-white": item.orangeBackground
                    })}>
                      {item.text}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </m.div>
      </div>
    </section>
  )
}

export default IconedCarrousel;