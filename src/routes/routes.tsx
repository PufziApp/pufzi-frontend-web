import { createBrowserRouter } from 'react-router-dom'

import { PublicLayout } from '../Layout/PublicLayout'
import { LandingPage } from '../pages/app/LandingPage'
import { PageNotFound } from '../pages/app/components/PageNotFound/PageNotFound'

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />,
      },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
])
