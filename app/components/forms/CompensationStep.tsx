import CompanyDetails from './fields/CompanyDetails';
import CompensationDetails from './fields/CompensationDetails';
import PositionDetails from './fields/PositionDetails';

type Props = {
  onNext: () => void;
};

export default function CompensationStep({ onNext }: Props) {
  return (
    <div className='flex flex-col space-y-8'>
      <CompanyDetails />
      <PositionDetails />
      <CompensationDetails />
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
