// ** Router imports
import { lazy, useContext } from 'react'

import { AbilityContext } from '@src/utility/context/Can'
// ** Router imports
import { useRoutes, Navigate } from 'react-router-dom'

// ** Layouts
import BlankLayout from '@layouts/BlankLayout'

// ** Hooks Imports
import { useLayout } from '@hooks/useLayout'

// ** Utils
import { getUserData, getHomeRouteForLoggedInUser } from '../utility/Utils'

// ** GetRoutes
import { getRoutes } from './routes'

// ** Components
// const Error = lazy(() => import('../views/pages/misc/Error'))
const Login = lazy(() => import('../views/pages/authentication/Login'))
// const NotAuthorized = lazy(() => import('../views/pages/misc/NotAuthorized'))
const AdminUser = lazy(() => import('../adminaccount/adminlogin/AdminUser'))


const Router = () => {
  
  const ability = useContext(AbilityContext)
  const v = [
    {
      action: "manage",
      subject: "all"
    }
  ]
  ability.update(v)
  // ** Hooks
  const { layout } = useLayout()

  const allRoutes = getRoutes(layout)
  const getHomeRoute = () => {
    
    const user = getUserData()
    if (user) {
      
      return getHomeRouteForLoggedInUser(user.role)
    } else {
      
      return '/adminlogin'
    }
  }

  const routes = useRoutes([

    {
      path: '/',
      index: true,
      element: <Navigate replace to={getHomeRoute()} />
    },
    {
      path: '/login',
      element: <BlankLayout />,
      children: [{ path: '/login', element: <Login /> }]
    },
    {
      path: '/adminlogin',
      element: <BlankLayout />,
      children: [{ path: '/adminlogin', element: <AdminUser /> }]
    },

    // {
    //   path: '/auth/not-auth',
    //   element: <BlankLayout />,
    //   children: [{ path: '/auth/not-auth', element: <NotAuthorized /> }]
    // },
    // {
    //   path: '*',
    //   element: <BlankLayout />,
    //   children: [{ path: '*', element: <Error /> }]
    // },
    ...allRoutes
  ])

  return routes
}

export default Router
