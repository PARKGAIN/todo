import * as React from "react";
import * as ReactDOM from "react-dom/client";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import Spinner from "./components/Spinner";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement={<Spinner />} />
  </React.StrictMode>
);
