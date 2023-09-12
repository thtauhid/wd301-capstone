import ProfileDetails from "./ProfileDetails";
import PasswordUpdate from "./PasswordUpdate";
import UpdatePreferences from "./UpdatePreferences";
import { H1, H2 } from "@/components/ui/heading";
import { P } from "@/components/ui/paragraph";

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
        <UpdatePreferences />
      </div>

      <div className='m-4 p-4 border border-stone-500 w-1/2'>
        <H2>Update Password</H2>
        <P>You can update your password from here.</P>
        <PasswordUpdate />
      </div>
    </div>
  );
}

export default Profile;
