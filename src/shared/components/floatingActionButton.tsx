import type { ReactNode } from 'react';

interface FloatingActionButtonProps {
  icon: ReactNode;
}

export function FloatingActionButton({ icon }: FloatingActionButtonProps) {
  return (
    <button className="rounded-[24px] text-white w-[4.4rem] h-[4.4rem] flex justify-center items-center bg-primary">
      {icon}
    </button>
  );
}
