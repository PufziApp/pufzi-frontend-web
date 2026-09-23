import { createBrowserRouter } from 'react-router-dom'

import { PublicLayout } from '../Layout/PublicLayout'
import { LandingPage } from '../pages/public/LandingPage'
import { PageNotFound } from '../pages/public/components/PageNotFound/PageNotFound'
import { LoginPage } from '../pages/public/components/LoginPage/LoginPage'
import { RegisterPage } from '../pages/public/components/RegisterPage/RegisterPage'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])
