import React from 'react';
import dynamic from 'next/dynamic';

import Loading from 'components/PageLoading';
import SEO from 'components/SEO';

const View = dynamic(() => import('views/Contact'), {
  loading: () => <Loading />
});

const Home: React.FC = () => {
  const title = 'CarDonum | Contact us';
  const description = 'CarDonum | Contact us';

  return (
    <>
      <SEO 
        title={title}
        description={description}
      />
      <View />
    </>
  );
};

export default Home;
