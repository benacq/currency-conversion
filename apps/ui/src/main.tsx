import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from '@tanstack/react-router'
import routeTree from './routes/route-definitions.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = new Router({ routeTree })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  const queryClient = new QueryClient()

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </React.StrictMode>,
  )
}
