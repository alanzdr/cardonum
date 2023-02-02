import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { resolvePath } from 'utils/path';

interface SEOProps {
  title: string;
  description: string;
  noIndex?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  noIndex = false,
}) => {
  const router = useRouter();

  return (
    <Head>
      <title>{title}</title>
      <meta
        property="og:title"
        content={title}
      />
      <meta
        name="description"
        content={description}
      />
      <meta
        property="og:description"
        content={description}
      />
      <meta property="og:image" content={resolvePath('/thumbnail.png')} />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />
      <link rel="canonical" href={resolvePath(router.asPath)} />
      <meta property="og:url" content={resolvePath(router.asPath)} />
      {noIndex ? (
        <meta name="robots" content="noindex" />
      ) : null}
    </Head>
  );
};

export default SEO;
