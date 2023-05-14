import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

//setelah install roouter

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LogiPage from "./Pages/login.jsx";
import RegisPage from "./Pages/register.jsx";

const router = createBrowserRouter([
  { path: "/", element: <div>Hello</div> },
  { path: "/login", element: <LogiPage /> },
  { path: "/register", element: <RegisPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
