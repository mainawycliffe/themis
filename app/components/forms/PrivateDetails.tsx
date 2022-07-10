import { useFormContext } from 'react-hook-form';

type Props = {
  onNext?: () => void;
};

export default function PrivateDetails({ onNext }: Props) {
  const { register } = useFormContext();

  return <></>;
}
