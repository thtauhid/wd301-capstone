import { Separator } from "@/components/ui/separator";
import Articles from "../articles";
import Matches from "../matches";

function Dashboard() {
  return (
    <div className='m-4'>
      <div className=''>
        <Matches />
      </div>
      <Separator className='m-4' />
      <div className='w-2/3'>
        <Articles />
      </div>
    </div>
  );
}

export default Dashboard;
