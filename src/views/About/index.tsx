import React from 'react';

import Motion from 'contexts/MotionContent';
import PageHero from 'layouts/PageHero';
import PageLoading from 'components/PageLoading';

const About: React.FC = () => {
  return (
    <Motion>
      <PageHero title='About us'/>
      <PageLoading />
    </Motion>
  )
}

export default About;