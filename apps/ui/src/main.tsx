import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Router, RouterProvider } from '@tanstack/react-router'
import routeTree from './routes/route-definitions.tsx'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

const router = new Router({ routeTree })



declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  const queryClient = new QueryClient({
    queryCache: new QueryCache({
      onError: (error, _) => {
        toast.error(<div>{error.message}</div>, { position: "top-left" });
      },
    }),
    mutationCache: new MutationCache({
      onError: (error, _) => {
        toast.error(<div>{error.message}</div>, { position: "top-left" });
      },
    })
  })

  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </React.StrictMode>,
  )
}
