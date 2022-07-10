import { ErrorMessage } from '@hookform/error-message';
import { useFormContext } from 'react-hook-form';
import Currencies from '~/data/currencies';
import type CompensationInfo from '~/types/CompensationInfo';

export default function CompensationDetails() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext<CompensationInfo>();

  const equityType = watch('compensation.equity.type', 'value');
  const hasEquityOptions = watch('compensation.equityOffered', 'None') !== 'None';

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

      <div className='form-group'>
        <label>Addition compensation details</label>
        <textarea placeholder='Addition compensation details' {...register('compensation.details')}></textarea>
        <ErrorMessage
          name='job.title'
          errors={errors}
          message='Job title is required!'
          render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
      </div>

      <div className='form-group'>
        <label>Equity</label>
        <select {...register('compensation.equityOffered')}>
          <option value='None'>None</option>
          <option value='RSU (Restricted Stock Units)'>RSU (Restricted Stock Units)</option>
          <option value='Phantom/Virtual Shares'>Phantom/Virtual Shares</option>
          <option value='ESOP (Equity Share Option)'>ESOP (Equity Share Option)</option>
          <option value='SAR (Share Appreciation Rights)'>SAR (Share Appreciation Rights)</option>
          <option value='Growth/shares options'>Growth/shares options</option>
          <option value='Other (Please add in the comment)'>Other (Please add in the comment)</option>
        </select>
      </div>

      {hasEquityOptions && (
        <>
          <div className='form-group'>
            <label>Equity Type</label>
            <select {...register('compensation.equity.type', { required: true })}>
              <option value='value'>Amount Value</option>
              <option value='unit'>Units/Percentage</option>
            </select>
          </div>

          {equityType === 'value' ? (
            <div className='form-group'>
              <label>Equity Value</label>

              <div className='input-group'>
                <div className='input-group-prepend'>
                  <span className='text-gray-500 sm:text-sm'> $ </span>
                </div>
                <input
                  type='text'
                  placeholder='0.00'
                  {...register('compensation.equity.value.amount', { required: true })}
                />
                <div className='input-group-append'>
                  <label htmlFor='currency' className='sr-only'>
                    Currency
                  </label>
                  <select
                    defaultValue='USD'
                    {...register('compensation.equity.value.currency', { required: true })}
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
                name='job.title'
                errors={errors}
                message='Job title is required!'
                render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
            </div>
          ) : (
            <div className='form-group'>
              <label>Equity Quantity</label>

              <div className='input-group'>
                <input
                  type='text'
                  placeholder='0.00'
                  {...register('compensation.equity.quantity', { required: true })}
                />
                <div className='input-group-append'>
                  <select
                    defaultValue='units'
                    {...register('compensation.equity.units', { required: true })}
                    className='focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md'>
                    <option value='units'>Units</option>
                    <option value='percent'>%</option>
                  </select>
                </div>
              </div>

              <ErrorMessage
                name='job.title'
                errors={errors}
                message='Job title is required!'
                render={({ message }) => <div className='error-message'>{message}</div>}></ErrorMessage>
            </div>
          )}

          <div className='form-group'>
            <label>Vesting Period</label>
            <select {...register('compensation.equity.vestingPeriod')}>
              <option value='1'>Vesting every year</option>
              <option value='2'>Vesting over 2 years</option>
              <option value='3'>Vesting over 3 years</option>
              <option value='4'>Vesting over 4 years</option>
              <option value='5'>Vesting over 5 years</option>
              <option value='6'>Vesting over 6 years</option>
              <option value='7'>Vesting over 7 years</option>
              <option value='8'>Vesting over 8 years</option>
            </select>
          </div>

          <div className='form-group'>
            <label>Addition equity details</label>
            <textarea placeholder='Addition equity details' {...register('compensation.equity.details')}></textarea>
          </div>
        </>
      )}
    </div>
  );
}
