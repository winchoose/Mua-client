import { FloatingActionButton } from '@shared/ui/floatingActionButton';
import Input from '@shared/ui/input';
import LocationIcon from '@shared/assets/icon/material-symbols_my-location-outline-rounded.svg?react';

interface BottomSheetLocationSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function BottomSheetLocationSearch({
  value,
  onChange,
}: BottomSheetLocationSearchProps) {
  return (
    <div className="flex items-center px-[2.6rem] justify-center h-[9.2rem] gap-[1.6rem]">
      <Input
        inputSize={'sm'}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="동을 입력해주세요. 예) 역삼동"
      />
      <FloatingActionButton
        mode="inline"
        icon={<LocationIcon width={'2rem'} height={'2rem'} />}
      />
    </div>
  );
}
