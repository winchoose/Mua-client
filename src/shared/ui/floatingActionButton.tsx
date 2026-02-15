import type { ReactNode } from 'react';
import { cn } from '@shared/utils/cn';

interface FloatingActionButtonProps {
  icon: ReactNode;
  onClick?: () => void;
  mode?: 'fixed' | 'inline';
}

export function FloatingActionButton({
  icon,
  onClick,
  mode = 'fixed',
}: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-[24px] text-white w-[4.4rem] h-[4.4rem] flex justify-center items-center bg-primary shrink-0',
        mode === 'fixed' && 'fixed right-[2.4rem] bottom-[5.4rem] 3-50',
      )}
    >
      {icon}
    </button>
  );
}
