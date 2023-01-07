import React, { useCallback, useState } from 'react';
import classNames from 'classnames';
import { m } from 'framer-motion';

import useScrollAnimation from 'hooks/useScrollAnimation';
import { ReactComponent as ArrowIcon } from 'assets/icons/down-arrow.svg'

const faqs = [
  { 
    title: "Will you pickup the car from us?",
    text: "<b>Yes!</b> Our tow trucks and helpful volunteers are available to pick up your car at a time that works for you - even if it isn't running! Let us know when and we'll be there." 
  },
  { 
    title: "Do we need active registration or insurance?",
    text: "<b>Yes!</b> Our tow trucks and helpful volunteers are available to pick up your car at a time that works for you - even if it isn't running! Let us know when and we'll be there." 
  },
  { 
    title: "Can I get a tax deductible receipt?",
    text: "<b>Yes!</b> Our tow trucks and helpful volunteers are available to pick up your car at a time that works for you - even if it isn't running! Let us know when and we'll be there." 
  }
]

const FAQ: React.FC = () => {
  const { animationRef, topDownShowAnimation } = useScrollAnimation()
  const [seletedIndex, setSelectedIndex] = useState(-1)

  const onClickFaq = useCallback(
    (index: number) => {
      setSelectedIndex(current => {
        if (current === index)
          return -1
        return index
      })
    },
    [],
  )

  const faqMaxWidth = useCallback(
    (element: HTMLDivElement) => {
      const content = element?.querySelector<HTMLDivElement>('.faq-content');
      if (!content) return;
      content.style.maxHeight = `${content.scrollHeight}px`
    },
    [],
  )
  
  
  return (
    <section className='py-12 lg:py-24 w-full'>
      <div className='container' ref={animationRef}>
        <m.div {...topDownShowAnimation()} className='flex flex-row items-end'>
          <h2 className='text-[2rem] lg:heading max-w-[13.1875rem] lg:max-w-[17.5rem]'>
            FAQ
          </h2>
          <div 
            className='relative ml-5 lg:ml-6 -top-5 w-20 h-px bg-[#D4D6E1] flex-none'
          />
        </m.div>
        <div className='flex flex-col mt-9'>
          {faqs.map((faq, index) => (
            <m.div 
              key={`faq-item-${index}`}
              className="relative w-full cursor-pointer bg-white py-8 px-6 lg:pl-10 lg:pr-14 border-[1px] border-[#ededed]"
              onClick={() => onClickFaq(index)}
              ref={faqMaxWidth}
              {...topDownShowAnimation(0.2 + 0.2 * index)}
            >
              <div 
                className={classNames('absolute top-3 rounded-r-xl left-0 w-1 h-0 transition-[height] duration-300 ease-out bg-primary', {
                  "!h-[calc(100%-1.5rem)]": seletedIndex === index
                })}
              />
              <ArrowIcon 
                className={classNames('absolute right-6 lg:right-9 transition-all duration-300 ease-out top-10', {
                  'rotate-180 text-primary': seletedIndex === index
                })}
              />
              <h3 className='text-base font-extrabold pr-6'>{faq.title}</h3>
              <div className={classNames("faq-content pt-5 transition-all ease-out duration-300 overflow-hidden", {
                "pt-0 !max-h-0": seletedIndex !== index
              })}>
                <p 
                  dangerouslySetInnerHTML={{__html: faq.text}}
                  className="text-sm "
                /> 
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ;