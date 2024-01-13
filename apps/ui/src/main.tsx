import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from '@tanstack/react-router'
import routeTree from './routes/route-definitions.tsx'

const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  )
}
