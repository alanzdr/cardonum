import React from 'react';

import Nathan from './Nathan'
import Avishai from './Avishai'
import Michal from './Michal'

const Founders: React.FC = () => {
  return (
    <section className='relative pb-24 lg:pb-32 pt-4 lg:pt-24 mt-24 bg-[#F0F2F6] w-full overflow-hidden'>
      <Nathan />
      <Avishai />
      <Michal />
    </section>
  )
}

export default Founders;