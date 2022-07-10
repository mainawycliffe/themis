import { Outlet } from '@remix-run/react';

export default function Index() {
  return (
    <div className='h-screen w-screen mx-auto flex flex-col'>
      <Outlet />
    </div>
  );
}
