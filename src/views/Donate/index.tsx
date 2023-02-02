import React from 'react';

import Motion from 'contexts/MotionContent';
import PageHero from 'layouts/PageHero';
import PageLoading from 'components/PageLoading';

const Donate: React.FC = () => {
  return (
    <Motion>
      <PageHero title='Donate'/>
      <PageLoading />
    </Motion>
  )
}

export default Donate;