import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Details from "../pages/Details";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import Properties from "../pages/Properties";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Search from "../pages/Search";
import Error404 from "../pages/Error404";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404 />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/details/:token",
        element: (
          <PrivateRoute>
            <Details />
          </PrivateRoute>
        ),
      },
      {
        path: "/sign_in",
        element: <SignIn />,
      },
      {
        path: "/sign_up",
        element: <SignUp />,
      },
      {
        path: "/update_profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/properties",
        element: (
          <PrivateRoute>
            <Properties />
          </PrivateRoute>
        ),
      },
      {
        path: "/about",
        loader: () => fetch("/about.json"),
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/search/:value",
        element: <Search />,
      },
    ],
  },
]);
