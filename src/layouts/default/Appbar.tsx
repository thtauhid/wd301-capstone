import { Cog6ToothIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

function Appbar() {
  return (
    <div className='bg-black flex justify-between'>
      <h1 className='text-white font-bold text-2xl p-4'>Sports Center</h1>
      <div className='flex p-4 gap-4 mr-4'>
        <Link to='/preferences'>
          <Cog6ToothIcon
            className='h-8 w-8 text-white
          hover:text-stone-400 transition duration-500 ease-in-out
          '
          />
        </Link>
        <UserIcon className='h-8 w-8 text-white' />
      </div>
    </div>
  );
}

export default Appbar;
