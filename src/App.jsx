import "./App.css";
import SignInPage from "./Pages/signIn";
import SignUpPage from "./Pages/signup";
import ErrorPage from "./Pages/error";
import DashboardPage from "./Pages/dashboard";
import BalancePage from "./Pages/balance";
import ExpensesPage from "./Pages/expenses";

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { user } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return user ? children : <Navigate to="/login" />;
  };

  const NotRequireAuth = ({ children }) => {
    return user ? <Navigate to="/" /> : children;
  };

  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <RequireAuth>
          <DashboardPage />
        </RequireAuth>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: (
        <NotRequireAuth>
          <SignInPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/register",
      element: (
        <NotRequireAuth>
          <SignUpPage />
        </NotRequireAuth>
      ),
    },
    {
      path: "/balance",
      element: (
        <RequireAuth>
          <BalancePage />
        </RequireAuth>
      ),
    },
    {
      path: "/expenses",
      element: (
        <RequireAuth>
          <ExpensesPage />
        </RequireAuth>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;
