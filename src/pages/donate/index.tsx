import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

import Loading from 'components/PageLoading';
import SEO from 'components/SEO';

const View = dynamic(() => import('views/Donate'), {
  suspense: true
});

const Home: React.FC = () => {
  const title = 'CarDonum | Donate';
  const description = 'CarDonum | Donate';

  return (
    <>
      <SEO 
        title={title}
        description={description}
      />
      <Suspense fallback={<Loading />}>
        <View />
      </Suspense>
    </>
  );
};

export default Home;
