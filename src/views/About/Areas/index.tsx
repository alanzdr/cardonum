import React from 'react';
import Image from 'next/image';

import FlowerIcon from 'assets/contact-us/delighted-icon.svg'
import KidImage from 'assets/about/areas-image.png'
import ToyIcon from 'assets/about/areas-toy-icon.svg'
import FoodIcon from 'assets/about/areas-food-icon.svg'
import MedicalIcon from 'assets/about/areas-medical-icon.svg'
import ShelterIcon from 'assets/about/areas-shelter-icon.svg'
import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';

const Areas: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section className='container py-16 lg:py-24'>
      <div ref={animationRef}>
        <div className='flex flex-col lg:items-center lg:text-center'>
          <m.div {...topDownShowAnimation()}>
            <Image 
              src={FlowerIcon}
              alt="Flower Icon"
              width={54}
              height={57}
            />
          </m.div>
          <m.h2 {...topDownShowAnimation(0.2)} className='mt-5 font-extrabold text-3xl lg:text-[2.5rem]'>
            Lorem ipsum dolor sit amet
          </m.h2>
          <m.p {...topDownShowAnimation(0.4)} className='mt-5'>
            The majority of the proceeds from car donations 
            are allocated to the following areas.
          </m.p>
        </div>
        <div className='mt-6 lg:mt-16 flex flex-col gap-8 lg:grid grid-cols-[1fr,2fr,1fr] grid-rows-2 lg:gap-x-2 lg:gap-y-10'>
          <m.div 
            {...topDownShowAnimation(0.6)}
            className='flex items-center justify-center col-start-2 col-end-3 row-start-1 row-span-2'
          >
            <Image 
              src={KidImage}
              alt="child in a wheelchair"
            />
          </m.div>
          <m.div {...topDownShowAnimation(0.8)} className='order-1 flex flex-col lg:items-end lg:text-right'>
            <div className='w-20 h-20 flex-none bg-[#EA4745] rounded-2xl flex items-center justify-center'>
              <Image 
                src={ToyIcon}
                alt="Toy Icon"
                width={34}
                height={30}
              />
            </div>
            <strong className='font-extrabold text-lg mt-3'>Toys</strong>
            <p className='mt-2'>
              Providing toys to underage cancer patients and children 
              facing misfortune, cancer, abuse, disease, and more.
            </p>
          </m.div>
          <m.div {...topDownShowAnimation(1)} className='order-3 lg:order-2 flex flex-col'>
            <div className='w-20 h-20 flex-none bg-[#FE755C] rounded-2xl flex items-center justify-center'>
              <Image 
                src={FoodIcon}
                alt="food Icon"
                width={35}
                height={42}
              />
            </div>
            <strong className='font-extrabold text-lg mt-3'>Food</strong>
            <p className='mt-2'>
              Providing financial assistance for food to those in need.
            </p>
          </m.div>
          <m.div {...topDownShowAnimation(1.2)} className='order-2 lg:order-3 flex flex-col lg:items-end lg:text-right'>
            <div className='w-20 h-20 flex-none bg-[#FF5B63] rounded-2xl flex items-center justify-center'>
              <Image 
                src={MedicalIcon}
                alt="Medical Icon"
                width={33}
                height={34}
              />
            </div>
            <strong className='font-extrabold text-lg mt-3'>Medical Expenses</strong>
            <p className='mt-2'>
              Assisting with covering medical expenses for children 
              who lack the financial means to do so.
            </p>
          </m.div>
          <m.div {...topDownShowAnimation(1.4)} className='order-4 flex flex-col'>
            <div className='w-20 h-20 flex-none bg-[#FF8B6A] rounded-2xl flex items-center justify-center'>
              <Image 
                src={ShelterIcon}
                alt="Shelter Icon"
                width={30}
                height={34}
              />
            </div>
            <strong className='font-extrabold text-lg mt-3'>Shelter</strong>
            <p className='mt-2'>
              Offering housing support for those requiring assistance.
            </p>
          </m.div>
        </div> 
      </div>
    </section>
  )
}

export default Areas;