import React from 'react';

import Motion from 'contexts/MotionContent';
import PageHero from 'layouts/PageHero';
import Delighted from './Delighted';
import Links from './Links';
import PageLoading from 'components/PageLoading';

const Contact: React.FC = () => {
  return (
    <Motion>
      <PageHero title='Contact us'/>
      <Delighted />
      <Links />
      <PageLoading />
    </Motion>
  )
}

export default Contact;