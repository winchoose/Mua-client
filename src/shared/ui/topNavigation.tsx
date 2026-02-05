import type { ReactNode } from 'react';

interface TopNavigationProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  onLeftClick?: () => void;
  onRightClick?: () => void;
}

export function TopNavigation({
  leftIcon,
  rightIcon,
  onLeftClick,
  onRightClick,
}: TopNavigationProps) {
  return (
    <div className="flex items-center justify-between w-full h-[6.4rem] px-[2rem] py-[2.4rem]">
      <button onClick={onLeftClick}>{leftIcon}</button>

      <button onClick={onRightClick}>{rightIcon}</button>
    </div>
  );
}
