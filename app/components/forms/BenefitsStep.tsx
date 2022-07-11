import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import Benefits from '~/data/benefits';
import type CompensationInfo from '~/types/CompensationInfo';

type Props = {
  onNext: () => void;
};

export default function BenefitsStep({ onNext }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompensationInfo>();

  return (
    <>
      <div className='flex flex-col space-y-4'>
        <h5 className='block font-bold text-2xl'>Benefits</h5>
        <div className='form-group'>
          <label>Paid days off</label>
          <input
            defaultValue={0}
            type='text'
            {...register('benefits.paidDaysOff', {
              required: {
                value: true,
                message: 'Paid days off is required!',
              },
              min: {
                value: 0,
                message: 'Paid days off must be greater than or equal to 0',
              },
              max: {
                value: 99,
                message: 'Paid days off must be less than 100',
              },
            })}
          />
          <ErrorMessage
            name='benefits.paidDaysOff'
            errors={errors}
            render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
        </div>

        <div className='form-group'>
          <label>Work Flexibility</label>
          <select
            {...register('benefits.workFlexibility', {
              required: {
                value: true,
                message: 'Work flexibility is required!',
              },
            })}>
            <option value='inOffice'>In Office</option>
            <option value='workFromHome'>Work From Home</option>
            <option value='hybrid'>Hybrid</option>
          </select>
          <ErrorMessage
            name='benefits.workFlexibility'
            errors={errors}
            render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
        </div>

        <div className='form-group'>
          <label>Benefits</label>
          {Benefits.map((benefit) => (
            <label key={benefit}>
              <input value={benefit} type='checkbox' {...register('benefits.otherBenefits')} />
              {` ${benefit}`}
            </label>
          ))}
        </div>

        <div className='form-group'>
          <label>Additional Benefits</label>
          <textarea {...register('benefits.additionalBenefits')}></textarea>
          <ErrorMessage
            name='benefits.additionalBenefits'
            errors={errors}
            render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
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
    </>
  );
}
