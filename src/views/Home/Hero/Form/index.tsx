import React, { useCallback, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';

import { ReactComponent as TelIcon } from 'assets/icons/cell.svg'
import VehicleType from './VehicleType'
import VehicleInfos from './VehicleInfos'
import ClientInfos from './ClientInfos'
import Thankyou from './Thankyou'
import { getTransition } from 'utils/animation';
import classNames from 'classnames';

const Form: React.FC = () => {
  const [step, setStep] = useState(0)
  // const [formData, setFormData] = useState()

  const StepFormLayout = useCallback(
    () => {
      switch (step) {
        case 0: return <VehicleType onSubmit={() => setStep(1)}/>
        case 1: return <VehicleInfos onSubmit={() => setStep(2)}/>
        case 2: return <ClientInfos onSubmit={() => setStep(3)}/>
        case 3: return <Thankyou onSubmit={() => setStep(0)}/>
        default: return null
      }
    },
    [step],
  )
  

  return (
    <div  className='relative'>
      {step < 3 && (
        <div className='max-w-[15.4375rem]'>
          <h2 className='text-2xl font-bold leading-none'>
            Call us or start here 
            online
          </h2>
          <a 
            href="tel:+7020000000" 
            className='flex w-full px-4 pt-3 pb-[0.6875rem] rounded-md mt-6 bg-gray-light hover:bg-gray-light/50 flex-row items-center text-[0.8125rem] text-gray hover:text-primary transition-colors'
          >
            <TelIcon className='w-[0.6875rem] h-[1.125rem] text-primary' />
            <p className='ml-[0.625rem] text-gray-dark'>
              Call: <strong>702-000-0000</strong>
            </p>
          </a>
        </div>
      )}
      <div className={classNames('relative w-[15.4375rem]', {
        'h-[24.6875rem] mt-6': step < 3,
        'h-[33.34375rem]': step >= 3,
      })}>
        <AnimatePresence>
          <m.div 
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0, x: 60 },
              animate: { opacity: 1, x: 0 },
              exit: { opacity: 0, x: -60 },
            }}
            transition={getTransition({
              stiffness: 160,
              damping: 30
            })}
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