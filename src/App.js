import React from "react";
import ReactDOM from "react-dom/client";
import AboutUs from "./components/page/AboutUs";
import Home from "./components/page/Home";
import Contact from "./components/page/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/page/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
        element: <AboutUs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}></RouterProvider>);
