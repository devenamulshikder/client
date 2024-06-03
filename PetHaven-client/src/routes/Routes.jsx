import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register/Register";
import PrivateRoute from "./PrivateRoute";
import PetListing from "../pages/PetListing/PetListing";
import Dashboard from "../layouts/Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/pet-listing",
        element: (
          <PrivateRoute>
            <PetListing />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path:'dashboard',
    element:<PrivateRoute>
      <Dashboard/>
    </PrivateRoute>,
    children:[
      {
        
      }
    ]
  }
]);
