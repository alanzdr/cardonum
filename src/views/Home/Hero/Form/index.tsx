import React, { useCallback, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, m } from 'framer-motion';

import LogoImage from 'assets/logo-tiny.svg'
import VehicleType from './VehicleType'
import VehicleInfos from './VehicleInfos'
import ClientInfos from './ClientInfos'
import Thankyou from './Thankyou'
import { getTransition } from 'utils/animation';

const Form: React.FC = () => {
  const [step, setStep] = useState(0)
  // const [formData, setFormData] = useState()

  const StepFormLayout = useCallback(
    () => {
      console.log(step)
      switch (step) {
        case 0: return <VehicleType onSubmit={() => setStep(1)}/>
        case 1: return <VehicleInfos onSubmit={() => setStep(2)}/>
        case 2: return <ClientInfos onSubmit={() => setStep(3)}/>
        case 3: return <Thankyou />
        default: return null
      }
    },
    [step],
  )
  

  return (
    <div className='relative'>
      <div>
        <Image 
          src={LogoImage}
          alt="CarDonum Logo"
          width={48}
          height={40}
        />
        <h2 className='mt-3 text-2xl leading-none'>Donate today</h2>
        <div 
          className="content-[''] w-10 h-[1px] bg-gray-medium mt-5"
        />
      </div>
      <div className='relative mt-4 w-[15.4375rem] h-[23.6875rem]'>
        <AnimatePresence>
          <m.div 
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0, x: 120 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -120 },
            }}
            transition={getTransition()}
            key={`form-step-${step}`} 
            className="absolute top-0 left-0 w-full h-full"
          >
            <StepFormLayout />
          </m.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Form