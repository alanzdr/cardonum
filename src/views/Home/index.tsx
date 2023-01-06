import React from 'react';

import Motion from 'contexts/MotionContent';

import Hero from './Hero'
import HowItWorks from './HowItWorks'
import ProfoundDifference from './ProfoundDifference'
import AtLasVegas from './AtLasVegas'
import DonateCards from './DonateCards'
import PageLoading from 'components/PageLoading';

const Home: React.FC = () => {
  return (
    <Motion>
      <Hero />
      <HowItWorks />
      <ProfoundDifference />
      <AtLasVegas />
      <DonateCards />
      <PageLoading />
    </Motion>
  )
}

export default Home;