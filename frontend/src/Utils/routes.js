// import App from '../App'

import * as layouts from '../Layouts'
import * as pages from '../Pages'

// A route config is just a data object passed into <Route> component.
export default [
  {
    component: layouts.LayoutStandard,
    routes: [
      {
        path: '/create',
        component: pages.PostCreate,
      },
      {
        path: '/about',
        component: pages.About,
      },
      {
        path: '/blog',
        component: pages.Blog,
      },
      {
        path: '/search',
        component: layouts.LayoutBase,
        routes: [
          {
            path: '/search/results',
            exact: true,
            component: pages.Search,
            name: 'Search Results',
          },
        ],
      },
      {
        path: '/',
        component: layouts.LayoutBase,
        routes: [
          {
            path: '/',
            exact: true,
            component: pages.Home,
            name: 'Home',
          },
          {
            path: '/posts',
            exact: true,
            component: pages.Posts,
            name: 'Posts',
          },
          {
            path: '/posts/:id',
            component: pages.Post
          },
          {
            component: pages.NotFound,
            name: 'Not Found',
          },
        ],
      },
    ],
  },
]
