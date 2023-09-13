import DefaultLayout from "@/layouts/default";
import ArticleDetails from "@/pages/articles/ArticleDetails";
import Dashboard from "@/pages/dashboard";
import NotFound from "@/pages/notfound";
import Profile from "@/pages/profile";
import SignIn from "@/pages/sign-in";
import SignUp from "@/pages/sign-up";
import { Navigate, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import FloatingPreferenceMenu from "@/pages/preferences/FloatingPreferenceMenu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "articles",
        children: [
          { index: true, element: <Navigate to='../' replace /> },
          {
            path: ":articleID",
            children: [{ index: true, element: <ArticleDetails /> }],
          },
        ],
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
      {
        path: "preferences",
        element: (
          <ProtectedRoute>
            <FloatingPreferenceMenu />
          </ProtectedRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
