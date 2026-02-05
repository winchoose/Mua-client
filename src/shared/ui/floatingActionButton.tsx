import type { ReactNode } from 'react';

interface FloatingActionButtonProps {
  icon: ReactNode;
  onClick?: () => void;
}

export function FloatingActionButton({
  icon,
  onClick,
}: FloatingActionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="fixed right-[2.4rem] bottom-[5.4rem] z-50 rounded-[24px] text-white w-[4.4rem] h-[4.4rem] flex justify-center items-center bg-primary"
    >
      {icon}
    </button>
  );
}
