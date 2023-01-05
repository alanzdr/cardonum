import React from 'react';
import Image from 'next/image'

import ProvideToys from './ProvideToys'
import MealsToFamilies from './MealsToFamilies'
import FinancialAid from './FinancialAid'
import CTA from './CTA'
import FlowerImage from 'assets/home/profound-flower.svg'
import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';

const ProfoundDifference: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section className='w-full py-16'>
      <div ref={animationRef} className='container text-center flex flex-col items-center'>
        <m.div {...topDownShowAnimation()}>
          <Image 
            src={FlowerImage}
            alt="flower icon"
            width={35.39}
            height={58.56}
          />
        </m.div>
        <m.h2 
          {...topDownShowAnimation(0.2)} 
          className='heading mt-5 max-w-[60.375rem]'
        >
          Your car donation can make a profound difference 
          in the lives of those in need.
        </m.h2>
        <m.p 
          {...topDownShowAnimation(0.4)} 
          className='mt-7'
        >
          When you donate your vehicle to our non-profit, 
          <b> you&apos;re helping to:</b>
        </m.p>
      </div>
      <ProvideToys />
      <MealsToFamilies />
      <FinancialAid />
      <CTA />
    </section>
  )
}

export default ProfoundDifference;