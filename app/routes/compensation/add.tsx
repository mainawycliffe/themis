import type { ActionFunction } from '@remix-run/node';
import AddCompensationInfoForm from '~/components/AddCompensationInfoForm';

export const action: ActionFunction = async ({ request }) => {
  console.log(request);
};

export default function AddPage() {
  return (
    <div className='flex flex-col py-8 w-full md:w-[60rem]  md:mx-auto'>
      <div className='block'>
        <h3 className='block text-3xl text-center'>Add Compensation Info</h3>
      </div>
      <div className='flex flex-col'>
        <AddCompensationInfoForm />
      </div>
    </div>
  );
}
