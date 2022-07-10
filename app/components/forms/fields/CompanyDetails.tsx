import { Controller, useFormContext } from 'react-hook-form';
import type CompensationInfo from '~/types/CompensationInfo';
import { ErrorMessage } from '@hookform/error-message';
import { Countries } from '~/data/countries';
import Switch from 'react-switch';

export default function CompanyDetails() {
  const {
    register,
    watch,
    control,
    formState: { errors },
  } = useFormContext<CompensationInfo>();

  const isLocalCompany = watch('company.status', 'local') === 'local' ? true : false;

  return (
    <div className='flex flex-col space-y-4'>
      <h5 className='block font-bold text-2xl'>Company Details</h5>
      <div className='form-group'>
        <Controller
          control={control}
          name='anonymizeInfo'
          defaultValue={true}
          render={({ field: { onChange, value } }) => (
            <div className='flex flex-row space-x-2'>
              <label htmlFor='anonymizeInfo' className='font-semibold'>
                Anonymize all data entered
              </label>
              <Switch id='anonymizeInfo' onChange={onChange} checked={value} />
            </div>
          )}
        />
      </div>
      <div className='form-group'>
        <label>Name</label>
        <input type='text' {...register('company.name', { required: true })} />
        <ErrorMessage
          name='company.name'
          errors={errors}
          message='Name of the company is required!'
          render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
      </div>
      <div className='form-group'>
        <label>Industry</label>
        <input type='text' {...register('company.industry', { required: true })} />
        <ErrorMessage
          name='company.industry'
          errors={errors}
          message='Industry is required!'
          render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
      </div>

      <div className='form-group'>
        <label>Estimated Employee Count *</label>
        <select {...register('company.companyEmployeesCount', { required: true })}>
          <option value='1'>1 (One)</option>
          <option value='2-5'>Between 2 and 5</option>
          <option value='6-10'>Between 6 and 10</option>
          <option value='11-50'>Between 11 and 50</option>
          <option value='51-100'>Between 50 and 100</option>
          <option value='over-100'>Over 100</option>
        </select>
        <p className='hint'>An estimated no. of employees in the company.</p>
      </div>

      <div className='form-group'>
        <label>Is it a local company</label>
        <select {...register('company.status', { required: true, value: 'local' })}>
          <option value='local'>Yes</option>
          <option value='remote'>No</option>
        </select>
        <p className='hint'>Whether the company has local offices or is based abroad!</p>
      </div>

      {isLocalCompany ? null : (
        <>
          {/* show this, if not local company */}
          <div className='form-group'>
            <label>Local Employee Count</label>
            <select {...register('company.localEmployeesCount', { required: true })}>
              <option value='1'>1 (One)</option>
              <option value='2-5'>Between 2 and 5</option>
              <option value='6-10'>Between 6 and 10</option>
              <option value='11-50'>Between 11 and 50</option>
              <option value='51-100'>Between 50 and 100</option>
              <option value='over-100'>Over 100</option>
            </select>
          </div>

          <div className='form-group'>
            <label>Country</label>
            <select {...register('company.country', { required: true })}>
              {Countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
        </>
      )}
    </div>
  );
}
