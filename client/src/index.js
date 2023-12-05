import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from "./views/Home/Home.js";
import About from "./views/About/About.js";
import Login from "./views/Login/Login.js"
import Signup from "./views/Signup/Signup.js"


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Carpenter from "./views/Carpenter/Carpenter.js";
import Electrician from "./views/Electrician/Electrician.js";
import Plumber from "./views/Plumber/Plumber.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/carpenter",
    element: <Carpenter />,
  },
  {
    path: "/electrician",
    element: <Electrician />,
  },
  {
    path: "/plumber",
    element: <Plumber />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  // {
  //   path: "/services",
  //   element: <Services />,
  // }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
