import ChevronDown from '@shared/assets/icon/chevron-down.svg?react';
interface DropButtonProps {
  label: string;
  onClick: () => void;
}

export function DropButton({ label, onClick }: DropButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex px-[1.2rem] h-[4rem] items-center justify-center border border-gray-200 rounded-[12px] gap-[0.4rem]"
    >
      <span className="typo-body1">{label}</span>
      <ChevronDown width={'2rem'} height={'2rem'} />
    </button>
  );
}
