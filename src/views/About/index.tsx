import React from 'react';

import Motion from 'contexts/MotionContent';
import PageHero from 'layouts/PageHero';
import Mission from './Mission';
import Established from './Established';
import Founders from './Founders';
import Team from './Team';
import Areas from './Areas';
import Institution from './Institution';

const About: React.FC = () => {
  return (
    <Motion>
      <PageHero title='About us'/>
      <Mission />
      <Established />
      <Founders />
      <Team />
      <Areas />
      <Institution />
    </Motion>
  )
}

export default About;