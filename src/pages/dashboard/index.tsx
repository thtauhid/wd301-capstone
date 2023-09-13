import Articles from "../articles";
import Favourites from "../favourites";
import Matches from "../matches";

function Dashboard() {
  return (
    <div className='m-4'>
      <div className=''>
        <Matches />
      </div>
      <span className='block bg-stone-400 m-4 p-[1px]' />
      <div className='flex'>
        <div className='w-2/3'>
          <Articles />
        </div>
        <div className='w-1/3'>
          <Favourites />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
