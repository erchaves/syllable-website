import React from 'react';

const siteRoot = 'https://www.syllablehq.com';
const stagingSiteRoot = 'http://localhost:3000';
const staticSiteData = {
  title: 'Syllable Technology + Design',
  siteRoot: siteRoot,
  description: 'Syllable is a technology and design studio in Brooklyn, New York. We build technology for mission-driven partners like nonprofits, cultural institutions, and startups advancing emerging technology.',
  imageUrl: `${siteRoot}/syllable-logo.png`,
  type: 'website',
};

// static.config.js
export default {
  getSiteData: () => (staticSiteData),
  plugins: ["react-static-plugin-sass"],
  siteRoot: siteRoot,
  stagingSiteRoot: stagingSiteRoot,
  getRoutes: async ({ dev }) => [
    {
      path: '/',
      template: 'src/Components/Home',
    },
    {
      path: '/projects',
      template: 'src/Components/Projects',
    },
    {
      path: '/studio',
      template: 'src/Components/Studio',
    },
    {
      path: '/about', //previous page name
      template: 'src/Components/Studio',
      noindex: true,
    },
    {
      path: '404',
      template: 'src/Components/404',
    },
  ],
  Document: ({
    Html,
    Head,
    Body,
    children,
    state: { siteData, renderMeta },
  }) => {
    return (
      <Html lang="en-US">
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="preload" as="font" href="/fonts/Matter-Regular.woff2" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="/fonts/Matter-Regular.woff" type="font/woff" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="/fonts/Matter-SemiBold.woff2" type="font/woff2" crossOrigin="anonymous"/>
          <link rel="preload" as="font" href="/fonts/Matter-SemiBold.woff" type="font/woff" crossOrigin="anonymous"/>

          <title>{staticSiteData.title}</title>
          <meta name="title" content={staticSiteData.title} />
          <meta name="description" content={staticSiteData.description} />

          <meta property="og:title" content={staticSiteData.title} />
          <meta property="og:description" content={staticSiteData.description} />
          <meta property="og:image" content={staticSiteData.imageUrl} />
          <meta property="og:type" content={staticSiteData.type} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content={staticSiteData.title} />
          <meta property="twitter:description" content={staticSiteData.description} />
          <meta property="twitter:image" content={staticSiteData.imageUrl} />
        </Head>
        <Body>
          {children}
         </Body>
      </Html>
    );
  },
}