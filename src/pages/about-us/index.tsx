import React from 'react';
import dynamic from 'next/dynamic';

import Loading from 'components/PageLoading';
import SEO from 'components/SEO';

const View = dynamic(() => import('views/About'), {
  loading: () => <Loading />
});

const Home: React.FC = () => {
  const title = 'CarDonum | About us';
  const description = 'CarDonum | About us';

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
