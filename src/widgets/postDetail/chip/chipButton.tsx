import { cn } from '@shared/utils/cn';
import { cva } from 'class-variance-authority';

interface ChipButtonProps {
  label: string;
  variant: 'approve' | 'reject';
  active: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

export const chipButtonVariants = cva(
  'w-[4.5rem] h-[2.6rem] rounded-[8px] border typo-caption transition-colors',
  {
    variants: {
      variant: {
        approve: '',
        reject: '',
      },
      active: {
        true: '',
        false: 'text-gray-300 border-gray-200',
      },
      disabled: {
        true: 'cursor-default',
        false: 'cursor-pointer',
      },
    },
    compoundVariants: [
      {
        variant: 'approve',
        active: true,
        className: 'border-primary',
      },
      {
        variant: 'reject',
        active: true,
        className: 'border-red',
      },
    ],
    defaultVariants: {
      active: false,
      disabled: false,
    },
  },
);

export function ChipButton({
  label,
  variant,
  active,
  disabled,
  onClick,
}: ChipButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(chipButtonVariants({ variant, active, disabled }))}
    >
      {label}
    </button>
  );
}
