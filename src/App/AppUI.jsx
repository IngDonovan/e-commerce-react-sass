import { BrowserRouter, useRoutes } from 'react-router-dom';
import { EcomContext } from "../Context";
import NavBar from '../Components/NavBar';
import Home from '../Pages/Home';
import MyAccount from '../Pages/MyAccount';
import MyOrder from '../Pages/MyOrder';
import MyOrders from '../Pages/MyOrders';
import NotFound from '../Pages/NotFound';
import SignIn from '../Pages/SignIn';
import SignOut from '../Pages/SignOut';

const AppRoutes = () => {
  let routes = useRoutes ([
    {path: '/', element: <Home />},
    {path: '/shopping-page', element: <Home />},
    {path: '/clothes', element: <Home />},
    {path: '/electronics', element: <Home />},
    {path: '/furnitures', element: <Home />},
    {path: '/toys', element: <Home />},
    {path: '/others', element: <Home />},
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

  return (
    <>
      <BrowserRouter>
        <NavBar />
        
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default AppUI;