import type { ActionFunction, MetaFunction } from '@remix-run/node';
import AddCompensationInfoForm from '~/components/AddCompensationInfoForm';

export const action: ActionFunction = async ({ request }) => {
  console.log(request);
};

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Add Compensation - Tech Pays',
  viewport: 'width=device-width,initial-scale=1',
});

export default function AddPage() {
  return (
    <div className='flex flex-col p-4 lg:py-8 w-full lg:w-[50rem] lg:mx-auto'>
      <div className='block'>
        <h3 className='block text-3xl text-center'>Add Compensation Info</h3>
      </div>
      <div className='flex flex-col'>
        <AddCompensationInfoForm />
      </div>
    </div>
  );
}
