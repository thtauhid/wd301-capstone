import { logoutUser } from "@/context/auth/actions";
import { useUserDispatch } from "@/context/auth/context";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

const SignOut = () => {
  const UserDispatch = useUserDispatch();
  useEffect(() => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    logoutUser(UserDispatch);
  }, [UserDispatch]);

  return <Navigate to='/sign-in' />;
};

export default SignOut;
