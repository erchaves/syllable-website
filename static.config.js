import React from 'react';

// static.config.js
export default {
  getSiteData: () => ({
    title: 'Syllable Technology + Design',
  }),
  plugins: ["react-static-plugin-sass"],
  getRoutes: async ({ dev }) => [
    {
      path: '/',
      component: 'src/Components/Home',
    },
    // temp test
    {
      path: '/clouds',
      component: 'src/Components/Home',
    },
    {
      path: '/projects',
      component: 'src/Components/Projects',
    },
    {
      path: '/studio',
      component: 'src/Components/Studio',
    },
    {
      path: '/about', //previous page name
      component: 'src/Components/Studio',
    },
    {
      path: '404',
      component: 'src/Components/404',
    },
  ],
  Document: ({ Html, Head, Body, children, siteData, renderMeta }) => (
    <Html>
      <Head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="preload" as="font" href="/fonts/Matter-Regular.woff2" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" as="font" href="/fonts/Matter-Regular.woff" type="font/woff" crossOrigin="anonymous"/>
        <link rel="preload" as="font" href="/fonts/Matter-SemiBold.woff2" type="font/woff2" crossOrigin="anonymous"/>
        <link rel="preload" as="font" href="/fonts/Matter-SemiBold.woff" type="font/woff" crossOrigin="anonymous"/>
      </Head>
      <Body>
        {children}
       </Body>
    </Html>
  ),
}