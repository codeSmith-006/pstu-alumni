import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../Layout/MainLayout";
import Alumni from "../pages/Alumni";
import Events from "../pages/Events";
import News from "../pages/News";
import Contact from "../pages/Contact";
import Index from "../pages/Index";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

const Router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "*",
        Component: NotFound,
      },
      {
        index: true,
        Component: Index,
      },
      {
        path: "alumni",
        Component: Alumni,
      },
      {
        path: "events",
        Component: Events,
      },
      {
        path: "news",
        Component: News,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);

export default Router;
