import Image from 'next/image';
import Button from 'components/Button';
import React from 'react';

import Background from './Background';
import HearthIcon from 'assets/home/types-vehicle-hearth.svg';
import CarIcon from 'assets/home/types-vehicle-icon-car.svg';
import CommercialIcon from 'assets/home/types-vehicle-icon-commercial.svg';
import GolfIcon from 'assets/home/types-vehicle-icon-golf.svg';
import MotorcyclesIcon from 'assets/home/types-vehicle-icon-motorcycles.svg';
import BoatsIcon from 'assets/home/types-vehicle-icon-boats.svg';
import MotorhomeIcon from 'assets/home/types-vehicle-icon-motorhome.svg';
import AirplanesIcon from 'assets/home/types-vehicle-icon-airplanes.svg';
import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';

const TypesVehicle: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section className="relative pt-[34.375rem] pb-16 sm:py-32 mt-14 w-full lg:overflow-hidden">
      <Background animation={topDownShowAnimation} />
      <div ref={animationRef} className='container relative z-10 flex justify-start sm:justify-end'>
        <div className='sm:max-w-[21rem] md:max-w-[32rem] lg:max-w-[43.125rem]'>
          <m.div  
            className='flex flex-row items-center '
            {...topDownShowAnimation(0.2)}  
          >
            <div className='w-12 h-[4.75rem] flex-none bg-primary rounded-lg flex items-center justify-center'>
              <Image 
                src={HearthIcon}
                alt="Hearth Icon"
                width={25}
                height={23}
              />
            </div>
            <h3 className='heading-2 ml-7 max-w-xs'>
              What type of vehicles  can I donate?
            </h3>
          </m.div>
          <div className='grid grid-rows-[auto] lg:grid-cols-2 mt-6 md:mt-10 gap-x-14'>
            <m.div {...topDownShowAnimation(0.4)} className='py-7 flex items-center'>
              <div className='flex flex-none items-center justify-center w-12 h-12 bg-white rounded-lg'>
                <Image 
                  src={CarIcon}
                  alt="Car Icon"
                  width={26}
                  height={26}
                />
              </div>
              <div className='ml-6'>
                <p className='text-sm'><b>Cars</b>, Trucks, Vans, SUVs.</p>
              </div>
            </m.div>
            <m.div {...topDownShowAnimation(0.5)} className='py-7 flex items-center'>
              <div className='flex flex-none items-center justify-center w-12 h-12 bg-white rounded-lg'>
                <Image 
                  src={CommercialIcon}
                  alt="Commercial Icon"
                  width={26}
                  height={21}
                />
              </div>
              <div className='ml-6'>
                <p className='text-sm'><b>Commercial Fleet</b> Vehicles.</p>
              </div>
            </m.div>
            <m.div {...topDownShowAnimation(0.6)} className='py-7 flex items-start border-t-[1px] border-[#dad9dd]'>
              <div className='flex flex-none items-center justify-center w-12 h-12 bg-white rounded-lg'>
                <Image 
                  src={GolfIcon}
                  alt="Golf Icon"
                  width={27}
                  height={21.13}
                />
              </div>
              <div className='ml-6'>
                <p className='text-sm'>
                  <b>Golf Carts</b>, ATVs, OTVs, Snowmobiles, 
                  Riding-Lawn Mowers, Farm Equipment.
                </p>
              </div>
            </m.div>
            <m.div {...topDownShowAnimation(0.7)} className='py-7 flex items-start border-t-[1px] border-[#dad9dd]'>
              <div className='flex flex-none items-center justify-center w-12 h-12 bg-white rounded-lg'>
                <Image 
                  src={MotorcyclesIcon}
                  alt="Motorcycles Icon"
                  width={28}
                  height={18.38}
                />
              </div>
              <div className='ml-6'>
                <p className='text-sm'>
                  <b>Motorcycles</b>, Motorbikes, Scooters, Mobility 
                  Vehicles, Motorized Wheelchairs.
                </p>
              </div>
            </m.div>
            <m.div {...topDownShowAnimation(0.8)} className='py-7 flex items-start border-t-[1px] border-[#dad9dd]'>
              <div className='flex flex-none items-center justify-center w-12 h-12 bg-white rounded-lg'>
                <Image 
                  src={BoatsIcon}
                  alt="Boats Icon"
                  width={22}
                  height={22}
                />
              </div>
              <div className='ml-6'>
                <p className='text-sm'>
                  <b>Sailboats</b>, Motorboats, Fishing Boats, 
                  Yachts, Pontoon Boats, Houseboats, Jet Skis, 
                  Watercraft Trailers.
                </p>
              </div>
            </m.div>
            <m.div {...topDownShowAnimation(0.9)} className='py-7 flex items-start border-t-[1px] border-[#dad9dd]'>
              <div className='flex flex-none items-center justify-center w-12 h-12 bg-white rounded-lg'>
                <Image 
                  src={MotorhomeIcon}
                  alt="Motorhome Icon"
                  width={26}
                  height={20.8}
                />
              </div>
              <div className='ml-6'>
                <p className='text-sm'>
                  <b>Recreational Vehicles (RVs)</b>, Motorhomes, 
                  Campers, Travel Trailers, Pop-Up Trailers, 
                  Fifth Wheels, Toy Haulers
                </p>
              </div>
            </m.div>
            <m.div {...topDownShowAnimation(1)} className='pt-7 flex items-center border-t-[1px] border-[#dad9dd]'>
              <div className='flex flex-none items-center justify-center w-12 h-12 bg-white rounded-lg'>
                <Image 
                  src={AirplanesIcon}
                  alt="Airplanes Icon"
                  width={25}
                  height={20.74}
                />
              </div>
              <div className='ml-6'>
                <p className='text-sm'>
                  <b>Airplanes</b>
                </p>
              </div>
            </m.div>
            <m.div {...topDownShowAnimation(1.1)} className='pt-7 flex items-center lg:border-t-[1px] border-[#dad9dd]'>
              <Button className='w-full'>
                Donate today
              </Button>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TypesVehicle;