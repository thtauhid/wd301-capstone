import DefaultLayout from "@/layouts/default";
import Dashboard from "@/pages/dashboard";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [{ index: true, element: <Dashboard /> }],
  },
]);
export default router;
