import * as layouts from '../Layouts'
import * as pages from '../Pages'

// A route config is just a data object passed into <Route> component.
export default [
  {
    component: layouts.LayoutBase,
    routes: [
      {
        path: '/create',
        component: pages.PostCreate,
      },
      {
        path: '/search',
        component: layouts.LayoutFull,
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
        component: layouts.LayoutStandard,
        routes: [
          {
            path: '/',
            exact: true,
            component: pages.Home,
            name: 'Home',
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
