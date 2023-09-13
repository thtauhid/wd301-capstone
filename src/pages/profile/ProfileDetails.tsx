import { P } from "@/components/ui/paragraph";
import { useUserState } from "@/context/auth/context";

function ProfileDetails() {
  const { user, isLoading } = useUserState();

  if (isLoading) {
    return <p className='p-4'>Loading...</p>;
  }

  return (
    <div className='my-4'>
      <P>ID: {user?.id}</P>
      <P>Name: {user?.name}</P>
      <P>Email: {user?.email}</P>
    </div>
  );
}

export default ProfileDetails;
