import { FloatingActionButton } from '@shared/ui/floatingActionButton';
import Input from '@shared/ui/input';
import LocationIcon from '@shared/assets/icon/material-symbols_my-location-outline-rounded.svg?react';

interface ModalLocationSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function ModalLocationSearch({
  value,
  onChange,
}: ModalLocationSearchProps) {
  return (
    <div className="flex items-center justify-center h-[9.2rem] gap-[0.8rem]">
      <Input
        inputSize={'ssm'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="예) 역삼동"
      />
      <FloatingActionButton
        icon={<LocationIcon width={'2rem'} height={'2rem'} />}
      />
    </div>
  );
}
