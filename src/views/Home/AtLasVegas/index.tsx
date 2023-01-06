import classNames from 'classnames';
import Button from 'components/Button';
import React from 'react';

import styles from './styles.module.css'
import Background from './Background';
import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';

const AtLasVegas: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section className={classNames("relative pt-[29.125rem] pb-16 sm:py-28 mt-14 w-full lg:overflow-hidden", styles.background)}>
      <Background animation={topDownShowAnimation} />
      <div ref={animationRef} className='container relative z-10'>
        <div className='max-w-[21rem] md:max-w-[32rem] lg:max-w-[44.5625rem]'>
          <m.h2 {...topDownShowAnimation(0.2)} className='text-2xl font-extrabold md:text-4xl md:leading-[2.75rem]'>
            At Las Vegas Car Donation,<br /> 
            we believe in making<br />
            a difference in<br />
            the world. 
          </m.h2>
          <div className='grid grid-rows-[auto] lg:grid-cols-2 mt-6 md:mt-10 gap-x-14 gap-y-6 md:gap-y-12'>
            <m.div {...topDownShowAnimation(0.4)}>
              <p>
                <b>We are committed to total transparency</b> and will 
                give you the chance to choose where your vehicle&apos;s 
                proceeds Are going. Plus, we&apos;ll stay in touch after 
                your donation to ensure its impact was maximized.
              </p>
              <p className='mt-6 md:mt-8'>
                Donating your vehicle is a profoundly generous 
                act that will help those in need. 
              </p>
            </m.div>
            <m.div {...topDownShowAnimation(0.6)}>
              <p>
                <b>With us, the process is easy and hassle-free! </b>
                Whether your vehicle is running or not, we will 
                tow it away from you, provide you with a receipt, 
                and take care of all DMV paperwork. 
              </p>
              <p className='mt-6 md:mt-8'>
                With us, you&apos;ll also get tax exemption 
                documentation on the spot. 
              </p>
            </m.div>
            <m.div {...{...topDownShowAnimation(0.8)}}>
              <strong className='text-lg'>
                Don&apos;t hesitate - donate your vehicle 
                today and make a real difference!
              </strong>
            </m.div>
            <m.div {...topDownShowAnimation(1)}>
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

export default AtLasVegas;