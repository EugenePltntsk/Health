import { App } from "components/App";
import React from "react";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "login/",
        element: <div>Login</div>,
      },
      {
        path: "register/",
        element: <div>Register</div>,
      },
      {
        path: "diary/",
        element: <div>Diary</div>,
      },
      {
        path: "calculator/",
        element: <div>Calculator</div>,
      },
    ],
  },
]);
