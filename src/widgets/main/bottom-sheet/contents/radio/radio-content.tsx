import { RadioButton } from '@widgets/main/bottom-sheet/contents/radio/radio-button';

type SortType = 'latest' | 'near';

interface RadioContentProps {
  value: SortType;
  onChange: (value: SortType) => void;
}

export function RadioContent({ value, onChange }: RadioContentProps) {
  return (
    <div className="flex flex-col gap-[2.4rem]">
      <RadioButton
        label="최신순"
        checked={value === 'latest'}
        onClick={() => onChange('latest')}
      />

      <RadioButton
        label="현 위치와 가까운 순"
        checked={value === 'near'}
        onClick={() => onChange('near')}
      />
    </div>
  );
}
