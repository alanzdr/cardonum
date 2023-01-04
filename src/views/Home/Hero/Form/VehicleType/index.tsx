import React, { SVGProps, useMemo, useState } from 'react';

import { ReactComponent as AutoIcon } from 'assets/icons/auto.svg'
import { ReactComponent as BoatIcon } from 'assets/icons/boat.svg'
import { ReactComponent as RVIcon } from 'assets/icons/rv.svg'
import { ReactComponent as MotorcycleIcon } from 'assets/icons/motorcycle.svg'
import { ReactComponent as OtherIcon } from 'assets/icons/other.svg'
import classNames from 'classnames';
import Button from 'components/Button';

interface Props {
  onSubmit: () => void
}

const VehicleType: React.FC<Props> = ({onSubmit}) => {
  const vehicleTypes = useMemo(() => ([
    { name: 'Auto', Icon: AutoIcon},
    { name: 'Boat/PWC', Icon: BoatIcon},
    { name: 'RV', Icon: RVIcon},
    { name: 'Motorcycle', Icon: MotorcycleIcon},
    { name: 'Others', Icon: OtherIcon},
  ]), [])

  const [selectType, setSeletedType] = useState(vehicleTypes[0].name)
  
  return (
    <div className='flex flex-col w-full h-full'>
      <p className='text-sm'>
        What <strong>type of vehicle</strong> you would 
        like to donate:
      </p>
      <div className='mt-7 grid grid-rows-[auto] grid-cols-3 gap-[0.625rem]'>
        {vehicleTypes.map(type => (
          <button
            key={`vehicle-type-${type.name}`}
            type="button"
            className={classNames("w-full h-24 rounded-lg flex flex-col items-center justify-center", {
              "bg-gray-light hover:bg-gray-light/60 transition-colors text-blue-dark": type.name !== selectType,
              "bg-primary text-white": type.name === selectType,
            })}
            onClick={() => setSeletedType(type.name)}
          >
            <div className='w-9 h-9 flex items-center justify-center'>
              <type.Icon />
            </div>
            <p className='text-[0.6875rem] mt-2 font-medium'>{type.name}</p>
          </button>
        ))}
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