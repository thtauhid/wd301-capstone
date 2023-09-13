import { Outlet } from "react-router-dom";
import Appbar from "./Appbar";

const DefaultLayout = () => {
  return (
    <>
      <Appbar />

      <main>
        <div className='m-4'>
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DefaultLayout;
