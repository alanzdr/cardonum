import React from 'react';

import Motion from 'contexts/MotionContent';
import PageHero from 'layouts/PageHero';
import PageLoading from 'components/PageLoading';
import PointsGrid from './PointsGrid';
import Video from './Video';
import PointsList from './PointsList';
import CtaBox from './CtaBox';
import IconedCarrousel from './IconedCarrousel';
import FlowerCTA from './FlowerCTA';
import Quotes from './Quotes';
import WithLove from './WithLove';
import BigCTA from './BigCTA';
import CheckList from './CheckList';
import FAQ from './FAQ';

const Donate: React.FC = () => {
  return (
    <Motion>
      <PageHero title='Donate'/>
      <PointsGrid />
      <Video />
      <PointsList />
      <CtaBox />
      <IconedCarrousel />
      <FlowerCTA />
      <Quotes />
      <WithLove />
      <BigCTA />
      <CheckList />
      <FAQ />
    </Motion>
  )
}

export default Donate;