import {
  Outlet,
  Route,
  RootRoute,
} from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import withNav from '../components/hocs/withNav'
import Conversions from '../pages/conversions'
import Wallets from '../pages/wallets'
import { getWallets } from '../core/requests/wallets';

interface WalletParams {
  wallet?: string;
  convert?: boolean;
}


const rootRoute = new RootRoute({
  component: withNav(() => (
    <>
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  )),
})

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Wallets,
  loader: () => getWallets(true),
  // preSearchFilters: ()=>{

  // },
  validateSearch: (search: WalletParams): WalletParams => {
    return {
      wallet: search.wallet || undefined,
      convert: search.convert || undefined
    }
  },
})

const conversionsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/conversions',
  component: Conversions
})

const routeTree = rootRoute.addChildren([indexRoute, conversionsRoute])

export default routeTree;