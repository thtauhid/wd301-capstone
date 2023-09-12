import DefaultLayout from "@/layouts/default";
import ArticleDetails from "@/pages/articles/ArticleDetails";
import Dashboard from "@/pages/dashboard";
import NotFound from "@/pages/notfound";
import { Navigate, createBrowserRouter } from "react-router-dom";

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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
export default router;
