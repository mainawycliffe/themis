import { Outlet } from '@remix-run/react';
import { Link } from 'react-router-dom';

export default function Index() {
  return (
    <div className='h-screen w-screen flex flex-col'>
      <Outlet />
    </div>
  );
}
