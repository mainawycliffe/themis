import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import type CompensationInfo from '~/types/CompensationInfo';

type Props = {
  onNext?: () => void;
};

export default function PrivateDetails({ onNext }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompensationInfo>();

  return (
    <>
      <div className='flex flex-col space-y-4'>
        <h5 className='block font-bold text-2xl'>Personal Details</h5>
        <p>
          This information will not be posted publicly and will be used for the purpose of moderation and verification.
        </p>
        <div className='form-group'>
          <label>Years of experience</label>
          <input
            defaultValue={0}
            type='text'
            {...register('personInformation.yearsOfExperience', {
              required: {
                value: true,
                message: 'Years of experience is required!',
              },
              min: {
                value: 0,
                message: 'Years of experience must be greater than or equal to 0',
              },
              max: {
                value: 99,
                message: 'Years of experience must be less than 100',
              },
            })}
          />
          <ErrorMessage
            name='personInformation.yearsOfExperience'
            errors={errors}
            render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
        </div>

        <div className='form-group'>
          <label>Years at current company</label>
          <input
            defaultValue={0}
            type='text'
            {...register('personInformation.yearsAtCurrentCompany', {
              required: {
                value: true,
                message: 'Years at current company is required!',
              },
              min: {
                value: 0,
                message: 'Years at current company must be greater than or equal to 0',
              },
              max: {
                value: 99,
                message: 'Years at current company must be less than 100',
              },
            })}
          />
          <ErrorMessage
            name='personInformation.yearsAtCurrentCompany'
            errors={errors}
            render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
        </div>

        <div className='form-group'>
          <label>Working hours per week</label>
          <input
            defaultValue={0}
            type='text'
            {...register('personInformation.weeklyWorkHours', {
              required: {
                value: true,
                message: 'Working hours per week is required!',
              },
              min: {
                value: 0,
                message: 'Working hours per week must be greater than or equal to 0',
              },
              max: {
                value: 99,
                message: 'Working hours per week must be less than 100',
              },
            })}
          />
          <ErrorMessage
            name='personInformation.yearsAtCurrentCompany'
            errors={errors}
            render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
        </div>

        <div className='form-group'>
          <label>Notice Period</label>
          <div className='input-group'>
            <label></label>
            <input
              type='text'
              placeholder='0'
              {...register('personInformation.noticePeriod.value', {
                required: {
                  value: true,
                  message: 'Notice period is required!',
                },
                min: {
                  value: 0,
                  message: 'Notice period must be greater than or equal to 0',
                },
                max: {
                  value: 99,
                  message: 'Notice period must be less than 100',
                },
              })}
            />
            <div className='input-group-append'>
              <label htmlFor='currency' className='sr-only'>
                Period
              </label>
              <select defaultValue='USD' {...register('personInformation.noticePeriod.type', { required: true })}>
                <option value='weeks'>Weeks</option>
                <option value='months'>Months</option>
              </select>
            </div>
          </div>
          <ErrorMessage
            name='compensation.signOnBonus.amount'
            errors={errors}
            message='Sign on bonus is required!'
            render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
        </div>

        <div className='form-group'>
          <label>Non-compete after leaving job</label>
          <select {...register('personInformation.nonCompeteClause', { required: true })}>
            <option value='notSure'>Not sure</option>
            <option value='yes'>Yes</option>
            <option value='no'>No</option>
            <option value='paid'>Paid</option>
            <option value='notPaid'>Not paid</option>
          </select>
        </div>

        <div className='flex flex-row justify-end'>
          <button type='submit' className='bg-blue-800 text-white py-2 px-6 rounded-md shadow-md font-bold'>
            Submit Details
          </button>
        </div>
      </div>
    </>
  );
}
