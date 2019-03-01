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
    {
      path: '/projects',
      component: 'src/Components/Projects',
    },
    {
      path: '/about',
      component: 'src/Components/About',
    },
    {
      path: '404',
      component: 'src/Components/404',
    },
  ],
}