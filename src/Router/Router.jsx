import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layout/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout
  },
]);

export default Router;

