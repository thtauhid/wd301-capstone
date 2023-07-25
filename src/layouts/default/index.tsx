import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";
import Dashboard from "@/pages/dashboard";

const DefaultLayout = () => {
  return (
    <>
      <Appbar />
      <main>
        <div className=''>
          <Dashboard />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
