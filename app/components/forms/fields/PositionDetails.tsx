import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import { Countries } from '~/data/countries';
import type CompensationInfo from '~/types/CompensationInfo';

export default function PositionDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompensationInfo>();

  return (
    <div className='flex flex-col space-y-4'>
      <h5 className='block font-bold text-2xl'>Position Details</h5>
      <div className='form-group'>
        <label>Title</label>
        <input type='text' placeholder='Software Engineer' {...register('job.title', { required: true })} />
        <ErrorMessage
          name='job.title'
          errors={errors}
          message='Job title is required!'
          render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
      </div>
      <div className='form-group'>
        <label>Country</label>
        <select {...register('job.country', { required: true })}>
          {Countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div className='form-column'>
        <div className='form-group'>
          <label>State/County/Province</label>
          <input type='text' placeholder='Nairobi County' {...register('job.region')} />
        </div>
        <div className='form-group'>
          <label>City</label>
          <input type='text' placeholder='Nairobi' {...register('job.city', { required: true })} />
          <ErrorMessage
            name='job.city'
            errors={errors}
            message='City is required!'
            render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
        </div>
      </div>
      <div className='form-group'>
        <label>Year data is valid For</label>
        <input type='year' placeholder='2022' {...register('yearOfferValid', { required: true })} />
        <ErrorMessage
          name='yearOfferValid'
          errors={errors}
          message='Year data is valid for is required!'
          render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
      </div>
    </div>
  );
}
