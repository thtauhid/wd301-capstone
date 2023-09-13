import ProfileDetails from "./ProfileDetails";
import PasswordUpdate from "./PasswordUpdate";
import Preferences from "../preferences";
import { H1, H2 } from "@/components/ui/heading";
import { P } from "@/components/ui/paragraph";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div>
      <H1>Profile</H1>
      <P>
        You can view your profile details and update your preferences & password
        from here.
      </P>

      <div className='m-4 p-4 border border-stone-500 w-1/2'>
        <H2>Profile Details</H2>
        <P>You can view your profile details from here.</P>
        <ProfileDetails />
      </div>

      <div className='m-4 p-4 border border-stone-500 w-1/2'>
        <H2>Preferences</H2>
        <P>You can update your preferences from here.</P>
        <Preferences />
      </div>

      <div className='m-4 p-4 border border-stone-500 w-1/2'>
        <H2>Update Password</H2>
        <P>You can update your password from here.</P>
        <PasswordUpdate />
      </div>

      <div className='m-4 p-4 border border-stone-500 w-1/2'>
        <H2>Sign out</H2>
        <P>Signout from Sports News</P>
        <div className='flex'>
          <Link
            to='/sign-out'
            className='w-full bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4 text-center mx-4'
          >
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
