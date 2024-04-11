import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Home from "../pages/Home";
import Details from "../pages/Details";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import UpdateProfile from "../pages/UpdateProfile";
import PrivateRoute from "./PrivateRoute";
import PrivateSignInSignUp from "./PrivateSignInSignUp";
import Properties from "../pages/Properties";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
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
        element: (
          <PrivateSignInSignUp>
            <SignIn />
          </PrivateSignInSignUp>
        ),
      },
      {
        path: "/sign_up",
        element: (
          <PrivateSignInSignUp>
            <SignUp />
          </PrivateSignInSignUp>
        ),
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
        element: <Properties/>,
      },
      {
        path: "/about",
        loader: () => fetch('/about.json'),
        element: <About/>,
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
    ],
  },
]);
