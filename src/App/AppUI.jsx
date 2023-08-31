import { BrowserRouter, useRoutes } from 'react-router-dom';
import { EcomContext } from "../Context";
import NavBar from '../Components/NavBar';
import Home from '../Pages/Home';

const AppRoutes = () => {
  let routes = useRoutes ([
    {path: '/', element: <Home />},
    // {path: '/shopping-page', element: <Home />},
    // {path: '/clothes', element: <Home />},
    // {path: '/electronics', element: <Home />},
    // {path: '/furnitures', element: <Home />},
    // {path: '/toys', element: <Home />},
    // {path: '/others', element: <Home />},
    // {path: '/my-account', element: <MyAccount />},
    // {path: '/my-order', element: <MyOrder />},
    // {path: '/my-orders', element: <MyOrders />},
    // {path: '/my-orders/last', element: <MyOrder />},
    // {path: '/my-orders/:id', element: <MyOrder />},
    // {path: '/*', element: <NotFound />},
    // {path: '/sign-in', element: <SignIn />},
    // {path: '/sign-out', element: <SignOut />},
  ]);
  return routes;
}

function AppUI() {

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <h1>hola</h1>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default AppUI;