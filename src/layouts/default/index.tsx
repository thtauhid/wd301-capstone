import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";

const DefaultLayout = () => {
  return (
    <>
      <Appbar />
      <main>
        <div className=''>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
