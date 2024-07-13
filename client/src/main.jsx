import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'


import App from "./App.jsx"


import Home from './pages/Home';

import Stores from './pages/Stores.jsx';

import Error from './pages/ErrorPage';

import ProductInfo from './pages/ProductInfo.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
       {
        path: '/stores',
        element: <Stores />
      }, 
      {
        path: '/products/:id',
        element: <ProductInfo />
      }, 
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
