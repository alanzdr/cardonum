import React from 'react';

import Button from 'components/Button';
import Input from 'components/Input';

interface Props {
  onSubmit: () => void
}

const ClientInfos: React.FC<Props> = ({onSubmit}) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <p className='text-sm'>
        Fill in your <strong>contact details</strong> and submit:
      </p>
      <div className='mt-8 flex flex-col'>
        <Input 
          label='Your Name'
          placeholder='Enter your name...'
        />
        <Input 
          label='Your Email'
          placeholder='Enter your email...'
          className='mt-7'
          type="email"
          mask="email"
        />
        <Input 
          label='Your Phone'
          placeholder='Enter your phone number...'
          className='mt-7'
          type="tel"
          mask='tel'
        />
      </div>
      <Button
        component='button'
        type="button"
        className='mt-auto'
        variant='filled'
        onClick={() => onSubmit()}
      >
        Submit
      </Button>
    </div>
  );
}

export default ClientInfos;