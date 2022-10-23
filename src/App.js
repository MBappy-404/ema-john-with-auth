import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import Order from './components/Order/Order';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import SIgnup from './components/SignUp/SIgnup';
import Main from './Layout/Main';
import PrivteRoute from './PrivateR/PrivteRoute';
import { productsAndCardLoader } from './Product&CardLoader/ProAndCardLoader';

function App() {
  const router = createBrowserRouter([

    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'shop',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'inventory',
          element: <PrivteRoute><Inventory></Inventory></PrivteRoute>
        },
        {
          path: 'orders',
          loader: productsAndCardLoader,
          element: <PrivteRoute><Order></Order></PrivteRoute>
        },
        {
          path:'/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SIgnup></SIgnup>
        },
        {
          path:'/shipping',
          element: <PrivteRoute> <Shipping></Shipping></PrivteRoute>
        }

      ]
    }
  ]);
  return (
    <div>

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
