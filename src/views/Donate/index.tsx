import React from 'react';

import Motion from 'contexts/MotionContent';
import PageHero from 'layouts/PageHero';
import PageLoading from 'components/PageLoading';
import PointsGrid from './PointsGrid';
import Video from './Video';
import PointsList from './PointsList';
import FAQ from './FAQ';
import CtaBox from './CtaBox';

const Donate: React.FC = () => {
  return (
    <Motion>
      <PageHero title='Donate'/>
      <PointsGrid />
      <Video />
      <PointsList />
      <CtaBox />
      <PageLoading />
      <FAQ />
    </Motion>
  )
}

export default Donate;