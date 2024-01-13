import {
  Outlet,
  Route,
  RootRoute,
} from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import withNav from '../components/hocs/withNav'
import Conversions from '../pages/conversions'
import Wallets from '../pages/wallets'



const rootRoute = new RootRoute({
  component: withNav(() => (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  )),
})

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Wallets
})

const conversionsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/conversions',
  component: Conversions
})

const routeTree = rootRoute.addChildren([indexRoute, conversionsRoute])

export default routeTree;