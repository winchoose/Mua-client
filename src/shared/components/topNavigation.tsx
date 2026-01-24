import type { ReactNode } from 'react';

interface TopNavigationProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export function TopNavigation({ leftIcon, rightIcon }: TopNavigationProps) {
  return (
    <div className="flex items-center justify-between w-full h-[6.4rem] p-[2.4rem]">
      <button>{leftIcon}</button>
      <button>{rightIcon}</button>
    </div>
  );
}
