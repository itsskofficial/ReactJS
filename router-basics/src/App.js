import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Root from "./components/pages/Root";
import Error from "./components/pages/Error";
import ProductDetails from "./components/pages/ProductDetails";

const router = createBrowserRouter(
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element : <Home/>},
      { path: '/products', element: <Products /> },
      { path: '/products/id', element: <ProductDetails/>}
    ],
    errorElement: <Error/>
  }
)

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
