import React, { useState } from 'react';
import Image from 'next/image'

import ToyIcon from 'assets/about/established-icon.svg'
import VideoThumbnail from 'assets/donate/video-image.png'
import VideoBackground from 'assets/donate/video-background-line.svg'
import TitleIcon from 'assets/donate/video-title-icon.svg'
import { ReactComponent as PlayIcon } from 'assets/donate/play-icon.svg'

import useScrollAnimation from 'hooks/useScrollAnimation';
import { m } from 'framer-motion';
import Button from 'components/Button';
import PopupDialog from 'components/PopupDialog';
import styles from './video.module.css'
import classNames from 'classnames';

const Video: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()
  const [isVideoOpened, setVideoOpened] = useState(false)

  return (
    <section className='w-full overflow-hidden py-16'>
      <div 
        ref={animationRef} 
        className='container grid grid-rows-[auto] gap-14 lg:grid-rows-1 lg:grid-cols-2 lg:gap-12'
      >
        <div className='flex flex-col justify-center row-start-2 lg:row-start-1'>
          <m.div  
            className='flex flex-row items-center w-full max-w-[30.2rem] mx-auto lg:mx-0'
            {...topDownShowAnimation(0.4)}  
          >
            <div className='w-12 h-[4.75rem] flex-none bg-primary rounded-lg flex items-center justify-center'>
              <Image 
                src={TitleIcon}
                alt="House with love "
                width={28}
                height={28}
              />
            </div>
            <h2 className='heading-2 ml-7 max-w-72'>
              Conubia nisi ipsum lobortis
            </h2>
          </m.div>
          <div className='mt-8 lg:pl-[4.8rem] max-w-[30.2rem] mx-auto lg:mx-0'>
            <m.p {...topDownShowAnimation(0.6)} className="font-extrabold">
              Lorem ipsum aenean in torquent commodo enim lorem ante, 
              rutrum vitae augue ante vitae.
            </m.p>
            <m.p {...topDownShowAnimation(0.8)} className='mt-8'>
              Potenti pharetra at, laoreet sit laoreet aliquam lobortis 
              per netus. id mi ullamcorper egestas senectus torquent 
              egestas class in, curae sem primis hac fames mauris 
              accumsan, per non.
            </m.p>
            <m.p {...topDownShowAnimation(1)} className='mt-8'>
              Ut ligula porta maecenas a dictumst felis, et 
              ultricies vulputate praesent massa, commodo suscipi.
            </m.p>
            
            <m.div {...topDownShowAnimation(1.2)} className='flex items-center mt-8'>
              <Button 
                className='w-full md:w-72'
                component='a' 
                href='/#donate-today'
              >
                Donate today
              </Button>
            </m.div>
          </div>
        </div>
        <div 
          className='flex justify-center lg:justify-end items-center'
        >
          <div className='w-full max-w-[480px]'>
            <button 
              onClick={() => setVideoOpened(true)}
              className='relative pt-[66.66666%] w-full'
              aria-label='Play Video'
            >
              <m.div 
                {...topDownShowAnimation()} 
                className="z-0 w-[17.5rem] md:w-[25.75rem] absolute -top-10 -right-8 md:-right-14 md:-top-12"
              >
                <Image 
                  src={VideoBackground}
                  alt="Lines in background"
                  width={412}
                  height={446}
                  className='w-full h-full'
                />
              </m.div>
              <m.div 
                {...topDownShowAnimation(0.1)}
                className="z-10 w-full h-full absolute left-0 top-0 "
              >
                <Image 
                  src={VideoThumbnail}
                  alt="Video Preview"
                  className='rounded-2xl'
                />
              </m.div>
              <m.div 
                {...topDownShowAnimation(0.2)}
                className="w-14 md:w-[4.25rem] top-1/2 left-1/2 absolute z-20"  
              >
                <PlayIcon 
                  className='w-full -translate-x-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors duration-300 ease-out'
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 68 68"
                />
              </m.div>
              <m.div
                {...topDownShowAnimation(0.3)}
                className='ball w-3 h-3 md:w-3 md:h-3 absolute -top-6 right-20'
              />
              <m.div
                {...topDownShowAnimation(0.4)}
                className='ball w-2 h-2 md:w-3 md:h-3 absolute -bottom-3 md:-bottom-5 left-11'
              />
              <m.div
                {...topDownShowAnimation(0.5)}
                className='ball w-4 h-4 md:w-6 md:h-6 absolute -bottom-8 md:-bottom-10 lg:-bottom-14 left-0'
              />
            </button>
          </div>
        </div>
      </div>
      <PopupDialog
        isOpened={isVideoOpened}
        onClose={() => setVideoOpened(false)}
        keepInView
      >
        <div className="w-[90%] max-w-screen-lg">
          <div className={classNames('rounded-2xl overflow-hidden w-full pt-[56.25%] relative bg-black', styles.shimmer)}>
            {isVideoOpened && (
              <iframe 
                className='w-full h-full absolute top-0 left-0'
                src="https://www.youtube.com/embed/cp4kWvgrNUQ?rel=0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
              />
            )}
          </div>
        </div>
      </PopupDialog>
    </section>
  );
}

export default Video;