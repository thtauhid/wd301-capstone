import Articles from "../articles";
import Matches from "../matches";

function Dashboard() {
  return (
    <div>
      <div className='m-4 p-4'>
        <Matches />
      </div>
      <div className='w-1/2'>
        <Articles />
      </div>
    </div>
  );
}

export default Dashboard;
