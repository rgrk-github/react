import React from "react";
import ReactDOM from "react-dom/client";
import AboutUs from "./components/page/AboutUs";
import Home from "./components/page/Home";
import Contact from "./components/page/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error from "./components/page/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error></Error>,
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="app-layout-container">
    <Header />
    <RouterProvider router={appRouter}></RouterProvider>
    <Footer />
  </div>
);
