import { Form } from '@remix-run/react';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import type CompensationInfo from '~/types/CompensationInfo';
import BenefitsStep from './forms/BenefitsStep';
import CompensationStep from './forms/CompensationStep';
import PrivateDetails from './forms/PrivateDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faCheckCircle, faListDots, faUserEdit } from '@fortawesome/free-solid-svg-icons';

export default function AddCompensationInfoForm() {
  const [currentStep, setCurrentStep] = useState<'compensation' | 'benefits' | 'private-info'>('compensation');

  const methods = useForm<CompensationInfo>({
    mode: 'onBlur',
    defaultValues: {
      anonymizeInfo: true,
    },
  });

  const { handleSubmit } = methods;

  const save = (fd: CompensationInfo) => {
    console.log(fd);
  };

  return (
    <Form onSubmit={handleSubmit(save)} method='post' action='/add'>
      <FormProvider {...methods}>
        <div className='flex flex-col space-y-10'>
          <div className='py-4 px-2'>
            <div className='flex items-center'>
              <div
                className={`flex items-center relative ${
                  currentStep !== 'compensation' ? 'text-teal-600' : 'text-gray-500'
                }`}>
                <div
                  className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2  ${
                    currentStep !== 'compensation' ? 'border-teal-600' : 'border-gray-300'
                  } `}>
                  <FontAwesomeIcon
                    className='feather feather-mail h-full w-full'
                    /* if not the first step, then first step is done */
                    icon={currentStep !== 'compensation' ? faCheckCircle : faBriefcase}
                  />
                </div>
                <div
                  className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                    currentStep !== 'compensation' ? 'text-teal-600' : 'text-gray-500'
                  }`}>
                  Compensation
                </div>
              </div>
              <div
                className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
                  currentStep !== 'compensation' ? 'border-teal-600' : 'border-gray-300'
                }`}></div>
              <div className={`flex items-center ${currentStep === 'private-info' ? 'text-white' : ''}  relative`}>
                <div
                  className={`rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 ${
                    currentStep === 'private-info' ? 'text-teal-600 border-teal-600' : 'border-gray-300'
                  }`}>
                  <FontAwesomeIcon
                    className='feather feather-mail h-full w-full'
                    /* if in the last step, then its done */
                    icon={currentStep !== 'private-info' ? faListDots : faCheckCircle}
                  />
                </div>
                <div
                  className={`absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase ${
                    currentStep === 'private-info' ? 'text-teal-600' : ''
                  }`}>
                  Benefits
                </div>
              </div>
              <div
                className={`flex-auto border-t-2 transition duration-500 ease-in-out  ${
                  currentStep === 'private-info' ? 'border-teal-600' : 'border-gray-300'
                }`}></div>
              <div className='flex items-center text-gray-500 relative'>
                <div className='rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300'>
                  <FontAwesomeIcon className='feather feather-mail h-full w-full' icon={faUserEdit} />
                </div>
                <div className='absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500'>
                  Personal Details
                </div>
              </div>
            </div>
          </div>
          {/* Navigation indicator */}
          {currentStep === 'compensation' && <CompensationStep onNext={() => setCurrentStep('benefits')} />}
          {currentStep === 'benefits' && <BenefitsStep onNext={() => setCurrentStep('private-info')} />}
          {currentStep === 'private-info' && <PrivateDetails />}
        </div>
      </FormProvider>
    </Form>
  );
}
