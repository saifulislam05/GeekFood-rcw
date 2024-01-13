import React from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Error from "./Error";
import Layout from "./Layout";
import Contact from "./Pages/Contact";
import Foods from "./Pages/Foods";
import Home from "./Pages/Home";
import Quote from "./Pages/Quote";
import Restaurent from "./Pages/Restaurant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement:<Error/>,
    children: [
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/quote",
        element:<Quote/>
      },
      {
        path: "/restaurants",
        element:<Restaurent/>
      },
      {
        path: "/foods",
        element:<Foods/>
      },
      {
        path: "/contact",
        element:<Contact/>
      },
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
