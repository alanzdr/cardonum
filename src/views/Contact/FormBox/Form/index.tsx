import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import Image from 'next/image'

import LogoImage from 'assets/home/form-logo.svg'
import Input from 'components/Input';
import Textarea from 'components/Textarea';
import Button from 'components/Button';
// import { Container } from './styles';

const Form: React.FC = () => {
  const [isSubmited, setSubmited] = useState(false)

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    setSubmited(true)
  }

  return (
    <div className='mt-8 '>
      {isSubmited ? (
        <m.div 
          className='flex flex-col justify-center w-full py-10'
          key="contact-form-submited" 
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: { opacity: 0, x: 120 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -120 },
          }}
        >
          <Image 
            src={LogoImage}
            alt="Logo CarDonum"
            width={80}
            height={80}
          />
          <h2 className='text-2xl mt-5'>Thank you!</h2>
          <strong className='text-sm mt-4'>We are grateful for your generous contribution.</strong>
          <p className='text-sm mt-3'>A representative from our team will be in touch shortly to discuss further details</p>
        </m.div>
      ) : (
        <m.form 
          onSubmit={onSubmit} 
          className='flex flex-col gap-8' 
          key="contact-form" 
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: { opacity: 0, x: 120 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -120 },
          }}  
        >
          <Input 
            label='Your Name'
            placeholder='Enter your name...'
          />
          <Input 
            label='Your Email'
            placeholder='Enter your email...'
            type="email"
            mask="email"
          />
          <Input 
            label='Your Phone'
            placeholder='Enter your phone number...'
            type="tel"
            mask='tel'
          />
          <Textarea 
            label='Message'
            placeholder='Enter your message...'
          />
          <Button
            component='button'
            type="submit"
            className='mt-auto'
            variant='filled'
          >
            Submit
          </Button>
        </m.form>

      )}
    </div>
  )
}

export default Form;