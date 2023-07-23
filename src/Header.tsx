import { Cog6ToothIcon, UserIcon } from "@heroicons/react/24/outline";

function Header() {
  return (
    <div className='bg-black flex justify-between'>
      <h1 className='text-white font-bold text-2xl p-4'>Sports Center</h1>
      <div className='flex p-4 gap-4 mr-4'>
        <Cog6ToothIcon className='h-8 w-8 text-white' />
        <UserIcon className='h-8 w-8 text-white' />
      </div>
    </div>
  );
}

export default Header;
