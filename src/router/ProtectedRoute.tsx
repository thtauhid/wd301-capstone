import { getAuthToken } from "@/utils/auth";
import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({
  children,
}: {
  children: JSX.Element;
}) {
  const { pathname } = useLocation();

  const isAuth = !!getAuthToken();
  if (isAuth) {
    return <>{children}</>;
  }
  return <Navigate to='/sign-in' replace state={{ referrer: pathname }} />;
}
