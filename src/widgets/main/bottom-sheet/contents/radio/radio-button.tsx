import RadioIcon from '@shared/assets/icon/Radio.svg?react';

interface RadioButtonProps {
  label: string;
  checked: boolean;
  onClick: () => void;
}

export function RadioButton({ label, checked, onClick }: RadioButtonProps) {
  return (
    <button
      className="flex items-center justify-between w-full h-[5.6rem] px-[2.4rem]"
      onClick={onClick}
    >
      <span className="typo-body1">{label}</span>
      <RadioIcon
        width={'2rem'}
        height={'2rem'}
        className={checked ? 'text-primary' : 'text-gray-300'}
      />
    </button>
  );
}
