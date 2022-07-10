import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className='h-screen w-screen flex flex-col justify-center'>
      <div className='w-screen mx-auto text-center flex flex-col space-y-4'>
        <div className='text-2xl'>Hi, Welcome to Wage Info</div>
        <div className='text-lg'>Please come back later, we are currently in the process of correcting data.</div>
        <div className='p-4'>
          <Link
            to={{
              pathname: '/compensation/add',
            }}
            className='text-lg bg-blue-800 py-3 px-4 rounded-md shadow-md text-white'>
            Add My Compensation
          </Link>
        </div>
      </div>
    </div>
  );
}
