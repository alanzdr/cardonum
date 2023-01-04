import Image from 'next/image'

import LogoImage from 'assets/home/form-logo.svg'
import Button from 'components/Button';

interface Props {
  onSubmit: () => void
}

const ThankYou: React.FC<Props> = ({ onSubmit }) => {
  return (
    <div className='flex flex-col w-full h-full'>
      <Image 
        src={LogoImage}
        alt="Logo CarDonum"
        width={80}
        height={80}
      />
      <h2 className='text-2xl mt-5'>Thank you!</h2>
      <strong className='text-sm mt-4'>We are grateful for your generous contribution.</strong>
      <p className='text-sm mt-3'>A representative from our team will be in touch shortly to discuss further details</p>
      <Button
        component='button'
        type="button"
        className='mt-auto'
        variant='outline'
        onClick={() => onSubmit()}
        showArrow={false}
      >
        OK
      </Button>
    </div>
  );
}

export default ThankYou;