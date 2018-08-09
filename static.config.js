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
        path: '/about',
        component: 'src/Components/About',
      },
      {
        path: '/contact',
        component: 'src/Components/Contact',
      },
      {
        path: '404',
        component: 'src/Components/404',
      },
    ]
  },
}
