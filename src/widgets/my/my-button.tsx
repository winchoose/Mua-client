import type { ReactNode } from 'react';
import ChevronRightIcon from '@shared/assets/icon/chevron-right.svg?react';
interface MyButtonProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export function MyButton({ icon, label, onClick }: MyButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex w-full h-[6.4rem] items-center justify-between px-[2.4rem] border-b"
    >
      <span className="flex gap-[0.8rem] typo-body1">
        {icon}
        {label}
      </span>
      <ChevronRightIcon width={'2.4rem'} height={'2.4rem'} />
    </button>
  );
}
