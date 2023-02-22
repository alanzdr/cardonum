import React from 'react';

import Motion from 'contexts/MotionContent';
import PageHero from 'layouts/PageHero';
import PageLoading from 'components/PageLoading';
import Mission from './Mission';
import Established from './Established';
import Founders from './Founders';
import Team from './Team';

const About: React.FC = () => {
  return (
    <Motion>
      <PageHero title='About us'/>
      <Mission />
      <Established />
      <Founders />
      <Team />
      <PageLoading />
    </Motion>
  )
}

export default About;