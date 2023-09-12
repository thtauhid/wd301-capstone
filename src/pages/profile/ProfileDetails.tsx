import { P } from "@/components/ui/paragraph";
import { getUserFromLocalStorage } from "@/utils/user";

function ProfileDetails() {
  const user = getUserFromLocalStorage();
  return (
    <div className='my-4'>
      <P>ID: {user?.id}</P>
      <P>Name: {user?.name}</P>
      <P>Email: {user?.email}</P>
    </div>
  );
}

export default ProfileDetails;
