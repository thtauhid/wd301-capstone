import { getAuthToken } from "@/utils/auth";
import { getUserFromLocalStorage } from "@/utils/user";
import { Cog6ToothIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const token = getAuthToken();
const user = getUserFromLocalStorage();

function Appbar() {
  return (
    <div className='bg-black flex justify-between items-center'>
      <p className='text-white font-bold text-2xl p-4'>Sports Center</p>
      <div className='flex p-4 gap-4'>
        {token && (
          <Link
            to='/preferences'
            className='text-white hover:text-stone-400 transition duration-500 ease-in-out border px-4 py-2 rounded-md'
          >
            <div className='flex justify-center items-center gap-2'>
              <Cog6ToothIcon className='h-8 w-8' />
              <p>Preferences</p>
            </div>
          </Link>
        )}

        {token ? (
          <Link
            to='/profile'
            className='text-white hover:text-stone-400 transition duration-500 ease-in-out border px-4 py-2 rounded-md'
          >
            <div className='flex justify-center items-center gap-2'>
              <UserIcon className='h-8 w-8' />
              <p>{user?.name}</p>
            </div>
          </Link>
        ) : (
          <Link
            to='/sign-in'
            className='text-white hover:text-stone-400 transition duration-500 ease-in-out border px-4 py-2 rounded-md'
          >
            <div className='flex justify-center items-center gap-2'>
              <UserIcon className='h-8 w-8' />
              <p>Login</p>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Appbar;
