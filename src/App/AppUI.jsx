import { useContext } from "react";
import { BrowserRouter, useRoutes, Navigate } from 'react-router-dom';
import { EcomContext } from "../Context";
import NavBar from '../Components/NavBar';
import Home from '../Pages/Home';
import MyAccount from '../Pages/MyAccount';
import MyOrder from '../Pages/MyOrder';
import MyOrders from '../Pages/MyOrders';
import NotFound from '../Pages/NotFound';
import SignIn from '../Pages/SignIn';
import SignOut from '../Pages/SignOut';
import CheckoutSideMenu from '../Components/CheckoutSideMenu';


const AppRoutes = () => {
  const {
    signOut,
    account,
  } = useContext(EcomContext);
  //Sign Out
  const signOutSesion = localStorage.getItem('sign-out');
  const parsedSignOut = JSON.parse(signOutSesion);
  const isUserSignOut = signOut || parsedSignOut;
  //Account
  const accountInLcl = localStorage.getItem('account');
  const parsedAccount = JSON.parse(accountInLcl);
  //Has ann account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true;
  const noAccountInLocalState = account ? Object.keys(account).length === 0 : true;
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState;

  let routes = useRoutes ([
    {path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    {path: '/e-commerce-react-sass', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    {path: '/clothes', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    {path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    {path: '/jewelery', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    {path: '/toys', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    {path: '/others', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
    {path: '/my-account', element: <MyAccount />},
    {path: '/my-order', element: <MyOrder />},
    {path: '/my-orders', element: <MyOrders />},
    {path: '/my-orders/last', element: <MyOrder />},
    {path: '/my-orders/:id', element: <MyOrder />},
    {path: '/*', element: <NotFound />},
    {path: '/sign-in', element: <SignIn />},
    {path: '/sign-out', element: <SignOut />},
  ]);
  return routes;
}

function AppUI() {
  const {
    initializeLocalStorage,
  } = useContext(EcomContext);
  initializeLocalStorage();

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CheckoutSideMenu />
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default AppUI;