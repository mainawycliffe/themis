import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import Currencies from '~/data/currencies';
import type CompensationInfo from '~/types/CompensationInfo';

export default function CompensationDetails() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CompensationInfo>();

  return (
    <div className='flex flex-col space-y-4'>
      <h5 className='block font-bold text-2xl'>Compensation Details</h5>
      <p className='block'>As precisely as possible, please tell use about your compensation information.</p>

      <div className='form-group'>
        <label>Contract Type</label>
        <select placeholder='Software Engineer' {...register('contractType', { required: true })}>
          <option value='fullTime'>Full Time</option>
          <option value='partTime'>Part Time</option>
          <option value='internship'>Internship</option>
          <option value='temporary'>Temporary</option>
          <option value='contract/freelance'>Contract/Freelance</option>
        </select>
      </div>

      <div className='form-column'>
        <div className='form-group'>
          <label>Salary</label>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='text-gray-500 sm:text-sm'> $ </span>
            </div>
            <input type='text' placeholder='0.00' {...register('compensation.salary.amount', { required: true })} />
            <div className='input-group-append'>
              <label htmlFor='currency' className='sr-only'>
                Currency
              </label>
              <select
                defaultValue='USD'
                {...register('compensation.salary.currency', { required: true })}
                className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'>
                {Currencies.map((currency) => (
                  <option key={currency.cc} value={currency.cc}>
                    {currency.cc}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <ErrorMessage
            name='compensation.salary.amount'
            errors={errors}
            message='Salary is required!'
            render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
        </div>
        <div className='form-column-currency-append'>
          <select placeholder='Software Engineer' {...register('compensation.salary.period', { required: true })}>
            <option value='year'>per year</option>
            <option value='month'>per month</option>
            <option value='day'>per day</option>
            <option value='hour'>per hour</option>
          </select>
        </div>
      </div>

      <div className='form-column'>
        <div className='form-group'>
          <label>Bonus</label>
          <div className='input-group'>
            <div className='input-group-prepend'>
              <span className='text-gray-500 sm:text-sm'> $ </span>
            </div>
            <input type='text' placeholder='0.00' {...register('compensation.bonus.amount', { required: true })} />
            <div className='input-group-append'>
              <label htmlFor='currency' className='sr-only'>
                Currency
              </label>
              <select
                defaultValue='USD'
                {...register('compensation.bonus.currency', { required: true })}
                className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'>
                {Currencies.map((currency) => (
                  <option key={currency.cc} value={currency.cc}>
                    {currency.cc}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <ErrorMessage
            name='compensation.bonus.amount'
            errors={errors}
            message='Bonus is required!'
            render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
        </div>
        <div className='form-column-currency-append'>
          <select placeholder='Software Engineer' {...register('compensation.bonus.period', { required: true })}>
            <option value='year'>per year</option>
            <option value='month'>per month</option>
            <option value='day'>per day</option>
            <option value='hour'>per hour</option>
          </select>
        </div>
      </div>
      <div className='form-group'>
        <label>Relocation Package</label>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <span className='text-gray-500 sm:text-sm'> $ </span>
          </div>
          <input
            type='text'
            placeholder='0.00'
            {...register('compensation.relocationPackage.amount', { required: true })}
          />
          <div className='input-group-append'>
            <label htmlFor='currency' className='sr-only'>
              Currency
            </label>
            <select
              defaultValue='USD'
              {...register('compensation.relocationPackage.currency', { required: true })}
              className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'>
              {Currencies.map((currency) => (
                <option key={currency.cc} value={currency.cc}>
                  {currency.cc}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ErrorMessage
          name='compensation.relocationPackage.amount'
          errors={errors}
          message='Relocation package is required!'
          render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
      </div>

      <div className='form-group'>
        <label>Sign On Bonus</label>
        <div className='input-group'>
          <div className='input-group-prepend'>
            <span className='text-gray-500 sm:text-sm'> $ </span>
          </div>
          <input type='text' placeholder='0.00' {...register('compensation.signOnBonus.amount', { required: true })} />
          <div className='input-group-append'>
            <label htmlFor='currency' className='sr-only'>
              Currency
            </label>
            <select
              defaultValue='USD'
              {...register('compensation.signOnBonus.currency', { required: true })}
              className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'>
              {Currencies.map((currency) => (
                <option key={currency.cc} value={currency.cc}>
                  {currency.cc}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ErrorMessage
          name='compensation.signOnBonus.amount'
          errors={errors}
          message='Sign on bonus is required!'
          render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
      </div>
    </div>
  );
}
