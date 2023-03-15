import React from 'react';

import Motion from 'contexts/MotionContent';
import PageHero from 'layouts/PageHero';
import PageLoading from 'components/PageLoading';
import PointsGrid from './PointsGrid';
import Video from './Video';

const Donate: React.FC = () => {
  return (
    <Motion>
      <PageHero title='Donate'/>
      <PointsGrid />
      <Video />
      <PageLoading />
    </Motion>
  )
}

export default Donate;