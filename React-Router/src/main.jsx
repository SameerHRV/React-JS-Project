import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, RouterProvider, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import Root from './Root'
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/root" element={<Root />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
