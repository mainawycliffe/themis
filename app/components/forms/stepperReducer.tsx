type CompensationFormStepsAction = {
  step: 'compensation' | 'benefits' | 'private-info';
};

export default function stepperReducer(
  state: 'compensation' | 'benefits' | 'private-info',
  action: CompensationFormStepsAction,
) {
  switch (action.step) {
    case 'compensation':
      return 'compensation';
    case 'benefits':
      return 'benefits';
    case 'private-info':
      return 'private-info';
    default:
      return state;
  }
}
