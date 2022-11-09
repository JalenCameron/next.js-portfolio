import React from 'react';
import Head from 'next/head';

function HeadSEO() {
  return (
    <Head>
        <title>Jalen Cameron · Web Developer</title>
        <meta
          name="description"
          content="Jalen Cameron is a Front End Web Developer in Vancouver, BC with experience developing modern sites using JavaScript, React, WordPress."
        />
        <meta
          name="keywords"
          content="Nextjs, React, Web Developer, UI/UX Designer, JavaScript, Portfolio, Projects, About"
        />
        <meta name="author" content="Jalen Cameron" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default HeadSEO