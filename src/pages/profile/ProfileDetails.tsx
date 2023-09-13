import { P } from "@/components/ui/paragraph";
import { useUserState } from "@/context/auth/context";

function ProfileDetails() {
  const { user } = useUserState();
  return (
    <div className='my-4'>
      <P>ID: {user?.id}</P>
      <P>Name: {user?.name}</P>
      <P>Email: {user?.email}</P>
    </div>
  );
}

export default ProfileDetails;
