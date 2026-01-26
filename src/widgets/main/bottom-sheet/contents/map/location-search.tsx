import { FloatingActionButton } from '@shared/ui/floatingActionButton';
import Input from '@shared/ui/input';
import LocationIcon from '@shared/assets/icon/material-symbols_my-location-outline-rounded.svg?react';

interface LocationSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function LocationSearch({ value, onChange }: LocationSearchProps) {
  return (
    <div className="flex items-center justify-center gap-[1.6rem]">
      <Input
        inputSize={'sm'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="동을 입력해주세요. 예) 역삼동"
      />
      <FloatingActionButton
        icon={<LocationIcon width={'1.83rem'} height={'1.83rem'} />}
      />
    </div>
  );
}
