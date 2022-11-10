import React from 'react';
import Head from 'next/head';

function HeadSEO() {
  return (
    <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}

export default HeadSEO