import { Form } from '@remix-run/react';
import { useReducer } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import type CompensationInfo from '~/types/CompensationInfo';
import BenefitsStep from './forms/BenefitsStep';
import CompensationStep from './forms/CompensationStep';
import PrivateDetails from './forms/PrivateDetails';
import stepperReducer from './forms/stepperReducer';

export default function AddCompensationInfoForm() {
  const [state, dispatch] = useReducer(stepperReducer, 'compensation');

  const methods = useForm<CompensationInfo>({
    mode: 'onBlur',
    defaultValues: {
      anonymizeInfo: true,
    },
  });

  const { handleSubmit, control } = methods;

  const save = (fd: CompensationInfo) => {
    console.log(fd);
  };

  return (
    <Form onSubmit={handleSubmit(save)} method='post' action='/add'>
      <FormProvider {...methods}>
        {/* Navigation indicator */}
        {state === 'compensation' && (
          <CompensationStep
            onNext={() =>
              dispatch({
                step: 'benefits',
              })
            }
          />
        )}
        {state === 'benefits' && (
          <BenefitsStep
            onNext={() =>
              dispatch({
                step: 'private-info',
              })
            }
          />
        )}
        {state === 'private-info' && <PrivateDetails />}
        {/* Controls to move next and back */}
      </FormProvider>
    </Form>
  );
}
