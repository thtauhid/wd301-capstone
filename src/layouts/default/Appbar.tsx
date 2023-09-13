import { fetchUser } from "@/context/auth/actions";
import { useUserDispatch, useUserState } from "@/context/auth/context";
import { getAuthToken } from "@/utils/auth";
import {
  Cog6ToothIcon,
  UserIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const token = getAuthToken();

function Appbar() {
  const UserDispatch = useUserDispatch();
  const { user } = useUserState();

  useEffect(() => {
    if (token) fetchUser(UserDispatch);
  }, [UserDispatch]);

  return (
    <div className='bg-black flex justify-between items-center'>
      <Link to='/' className='text-white font-bold text-2xl mx-12'>
        Sports Center
      </Link>
      <div className='flex p-4 gap-4'>
        {user && (
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

        {user ? (
          <Link
            to='/profile'
            className='text-white hover:text-stone-400 transition duration-500 ease-in-out border px-4 py-2 rounded-md'
          >
            <div className='flex justify-center items-center gap-2'>
              <UserIcon className='h-8 w-8' />
              <p>{user.name}</p>
            </div>
          </Link>
        ) : (
          <>
            <Link
              to='/sign-in'
              className='text-white hover:text-stone-400 transition duration-500 ease-in-out border px-4 py-2 rounded-md'
            >
              <div className='flex justify-center items-center gap-2'>
                <UserIcon className='h-8 w-8' />
                <p>Sign In</p>
              </div>
            </Link>
            <Link
              to='/sign-up'
              className='text-white hover:text-stone-400 transition duration-500 ease-in-out border px-4 py-2 rounded-md'
            >
              <div className='flex justify-center items-center gap-2'>
                <UserPlusIcon className='h-8 w-8' />
                <p>Sign Up</p>
              </div>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Appbar;
