import React from 'react';

import Motion from 'contexts/MotionContent';
import PageHero from 'layouts/PageHero';
import PageLoading from 'components/PageLoading';

const Contact: React.FC = () => {
  return (
    <Motion>
      <PageHero title='Contact us'/>
      <PageLoading />
    </Motion>
  )
}

export default Contact;