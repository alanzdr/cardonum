import Button from 'components/Button';
import React from 'react';
import Image from 'next/image'
import { m } from 'framer-motion';

import useScrollAnimation from 'hooks/useScrollAnimation';
import KidImage from 'assets/donate/big-cta-image.png'
import GiftIcon from 'assets/donate/big-cta-icon.svg'

const BigCTA: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()

  return (
    <section className="mt-8 relative pb-16 sm:py-32 w-full">
      <m.div 
        {...topDownShowAnimation()} 
        className="hidden lg:flex lg:w-[28rem] xl:w-[678px] absolute left-0 top-0 md:top-1/2 z-0"
      >
        <Image 
          src={KidImage}
          alt="children hugging"
          width={678}
          height={924}
          className="w-full object-contain object-left-top md:-translate-y-1/2"
        />
      </m.div>
      <div ref={animationRef} className='lg:container relative z-10 flex justify-start sm:justify-end '>
        <div className='lg:max-w-[31rem]'>
          <div className='container lg:max-w-full lg:w-full'>
            <m.div {...topDownShowAnimation(0.2)}>
              <Image 
                src={GiftIcon}
                alt="Gift Icon"
                width={60}
                height={43}
              />
            </m.div>
            <m.div  
              className='flex flex-row items-center mt-8'
              {...topDownShowAnimation(0.2)}  
            >
              <h2 className='heading-2 lg:text-4xl max-w-[23rem]'>
                Lorem ipsum dolor sit amet consectutier
                web elit
              </h2>
            </m.div>
          </div>
          <m.div 
            {...topDownShowAnimation(0.3)} 
            className="w-full my-4 lg:hidden"
          >
            <Image 
              src={KidImage}
              alt="children hugging"
              width={360}
              height={532}
              className="w-full max-w-sm object-contain object-left-top"
            />
          </m.div>
          <div className='container lg:max-w-full lg:w-full mt-8 flex flex-col gap-6'>
            <m.p  {...topDownShowAnimation(0.4)} className='font-bold'>
              Lorem ipsum aenean in torquent commodo enim lorem ante, 
              rutrum vitae augue ante vitae potenti pharet.
            </m.p>
            <m.p {...topDownShowAnimation(0.5)}>
              Lorem ipsum aenean in torquent commodo enim lorem ante, 
              rutrum vitae augue ante vitae potenti pharetra at, 
              laoreet sit laoreet aliquam lobortis per netus. 
            </m.p>
            <m.p {...topDownShowAnimation(0.6)}>
              Id mi ullamcorper egestas senectus torquent egestas 
              class in, curae sem primis hac fames mauris accumsan, 
              per non velit non suspendisse bibendum per. 
            </m.p>
            <m.p {...topDownShowAnimation(0.7)}>
              Ut ligula porta maecenas a dictumst felis, et ultricies 
              vulputate praesent massa, commodo suscipit porttitor 
              sit class. pulvinar dolor suspendisse purus risus 
              scelerisque.
            </m.p>
            <m.div {...topDownShowAnimation(0.8)} className='flex items-center pt-2'>
              <Button 
                className='w-full md:w-72'
                component='a'
                href="/contact-us"  
              >
                Contact us
              </Button>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BigCTA;