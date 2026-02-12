import { cn } from '@shared/utils/cn';
import { cva } from 'class-variance-authority';

interface ModalButtonProps {
  label: string;
  value?: string;
  placeholder?: React.ReactNode;
  onClick: () => void;
}

const modalButtonVariants = cva(
  'w-full h-[5.6rem] rounded-[16px] border px-[1.6rem] text-left typo-body1 transition-colors',
  {
    variants: {
      hasValue: {
        true: 'border-gray-950 text-gray-950',
        false: 'border-gray-200 text-gray-300',
      },
    },
    defaultVariants: {
      hasValue: false,
    },
  },
);

export function ModalButton({
  label,
  value,
  placeholder,
  onClick,
}: ModalButtonProps) {
  const hasValue = Boolean(value);

  return (
    <div className="flex flex-col px-[2.4rem] gap-[0.8rem] h-[8.8rem]">
      <span className="typo-body1">
        {label} <span className="text-red">*</span>
      </span>
      <button
        onClick={onClick}
        className={cn(modalButtonVariants({ hasValue }))}
      >
        {hasValue ? value : placeholder}
      </button>
    </div>
  );
}
