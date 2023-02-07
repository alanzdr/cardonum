import React from 'react';

import Motion from 'contexts/MotionContent';
import PageHero from 'layouts/PageHero';
import Delighted from './Delighted';
import Links from './Links';
import FormBox from './FormBox';

const Contact: React.FC = () => {
  return (
    <Motion>
      <PageHero title='Contact us'/>
      <Delighted />
      <Links />
      <FormBox />
    </Motion>
  )
}

export default Contact;