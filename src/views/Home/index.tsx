import React from 'react';

import Motion from 'contexts/MotionContent';

import Hero from './Hero'
import PageLoading from 'components/PageLoading';

const Home: React.FC = () => {
  return (
    <Motion>
      <Hero />
      <PageLoading />
    </Motion>
  )
}

export default Home;