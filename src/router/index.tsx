import DefaultLayout from "@/layouts/default";
import Articles from "@/pages/articles";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ index: true, element: <Articles /> }],
  },
]);
export default router;
