import Articles from "../articles";
import Matches from "../matches";

function Dashboard() {
  return (
    <div className='m-4'>
      <div className=''>
        <Matches />
      </div>
      <span className='block bg-stone-400 m-4 p-[1px]' />
      <div className='w-2/3'>
        <Articles />
      </div>
    </div>
  );
}

export default Dashboard;
