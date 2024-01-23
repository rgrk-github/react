import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";

import Home from "./components/page/Home";
import Contact from "./components/page/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/page/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/page/RestaurantMenu";

const AboutUs = lazy(() => import("./components/page/AboutUs"));

//import AboutUs from "./components/page/AboutUs";

const AppLayout = () => {
  return (
    <div className="app-layout-container">
      <Header />
      <div className="content-area">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
