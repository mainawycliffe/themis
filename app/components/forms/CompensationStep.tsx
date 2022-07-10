import { useFormContext } from 'react-hook-form';
import type CompensationInfo from '~/types/CompensationInfo';

type Props = {
  onNext: () => void;
};

export default function CompensationStep({ onNext }: Props) {
  const { register, watch } = useFormContext<CompensationInfo>();

  const isLocalCompany = watch('company.isLocalCompany');

  return (
    <div className='flex flex-col space-y-8'>
      <div className='flex flex-col space-y-4'>
        <h5 className='block font-bold text-2xl'>Company Details</h5>
        <div className='form-group'>
          <label>Name</label>
          <input type='text' {...register('company.name', { required: true })} />
        </div>
        <div className='form-group'>
          <label>Industry</label>
          <input type='text' {...register('company.industry', { required: true })} />
        </div>

        <div className='form-group'>
          <label>Estimated Employee Count</label>
          <input type='text' {...register('company.companyEmployeesCount', { required: true })} />
        </div>

        <div className='form-group'>
          <label>Is Company Local</label>
          <input type='checkbox' {...register('company.isLocalCompany', { required: true })} />
        </div>

        {!isLocalCompany && (
          <>
            {/* show this, if not local company */}
            <div className='form-group'>
              <label>Local Employee Count</label>
              <input type='number' {...register('company.localEmployeesCount', { required: true })} />
            </div>

            <div className='form-group'>
              <label>Country</label>
              <input type='text' {...register('company.country', { required: true })} />
            </div>
          </>
        )}
      </div>
      <div className='flex flex-col space-y-4'>
        <h5 className='block font-bold text-2xl'>Position Details</h5>
        <div className='form-group'>
          <label>Title</label>
          <input type='text' placeholder='Software Engineer' {...register('job.title', { required: true })} />
        </div>
        <div className='form-group'>
          <label>Country</label>
          <input type='text' placeholder='Kenya' {...register('job.country', { required: true })} />
        </div>

        <div className='form-group'>
          <label>State/County/Province</label>
          <input type='text' placeholder='Nairobi County' {...register('job.region', { required: true })} />
        </div>

        <div className='form-group'>
          <label>City</label>
          <input type='text' placeholder='Nairobi' {...register('job.city', { required: true })} />
        </div>

        <div className='form-group'>
          <label>Year Data Valid For</label>
          <input type='text' placeholder='2011' {...register('yearOfferValid', { required: true })} />
        </div>
      </div>

      <div className='flex flex-col space-y-4'>
        <h5 className='block font-bold text-2xl'>Compensation Details</h5>
        <div className='form-group'>
          <label>Salary</label>
          <input type='text' placeholder='Software Engineer' {...register('job.title', { required: true })} />
        </div>
        <div className='form-group'>
          <label>Bonus</label>
          <input type='text' placeholder='Kenya' {...register('job.country', { required: true })} />
        </div>

        <div className='form-group'>
          <label>Relocation Package</label>
          <input type='text' placeholder='Nairobi County' {...register('job.region', { required: true })} />
        </div>

        <div className='form-group'>
          <label>Sign On Bonus</label>
          <input type='text' placeholder='Nairobi' {...register('job.city', { required: true })} />
        </div>

        {/*  <div className='form-group'>
          <label>Year Data Valid For</label>
          <input type='text' placeholder='2011' {...register('yearOfferValid', { required: true })} />
        </div> */}
      </div>
      <div className='flex flex-row justify-end'>
        <button
          type='button'
          onClick={() => onNext()}
          className='bg-blue-800 text-white py-2 px-6 rounded-md shadow-md font-bold'>
          Next
        </button>
      </div>
    </div>
  );
}
