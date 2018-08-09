export default {
  plugins: ['react-static-plugin-sass'],
  getSiteData: () => ({
    title: 'React Static',
  }),
  getRoutes: async () => {
    return [
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
    ]
  },
}
