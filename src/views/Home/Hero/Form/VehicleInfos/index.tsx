import React from 'react';

import Button from 'components/Button';
import Input from 'components/Input';

interface Props {
  onSubmit: () => void
}

const VehicleType: React.FC<Props> = ({onSubmit}) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <p className='text-sm'>
        Fill in the 
        <strong> information about the vehicle </strong> 
        you want to donate:
      </p>
      <div className='mt-8 flex flex-col'>
        <Input 
          label='Vehicle Year'
          placeholder='Enter vehicle year...'
          type="number"
        />
        <Input 
          label='Vehicle Brand'
          placeholder='Enter vehicle brand...'
          className='mt-7'
        />
      </div>
      <Button
        component='button'
        type="button"
        className='mt-auto'
        variant='outline'
        onClick={() => onSubmit()}
      >
        Next step
      </Button>
    </div>
  );
}

export default VehicleType;