import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./views/Home/Home.js";
import About from "./views/About/About.js";
import Login from "./views/Login/Login.js"
import Signup from "./views/Signup/Signup.js"
import Services from "./views/Services/Services.js"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/services",
    element: <Services />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router} />
  </>
);
