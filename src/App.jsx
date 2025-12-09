import "./App.css";
import SignInPage from "./Pages/signIn";
import SignUpPage from "./Pages/signup";
import ErrorPage from "./Pages/error";
import DashboardPage from "./Pages/dashboard";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
