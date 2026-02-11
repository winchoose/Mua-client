import { cn } from '@shared/utils/cn';
import { cva } from 'class-variance-authority';
import type { ComponentProps, ReactNode } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  icon?: ReactNode;
  size?: 'md' | 'sm';
  color?: 'primary' | 'yellow';
}
const ButtonVariants = cva('rounded-[16px] typo-h3 text-white', {
  variants: {
    color: {
      primary: 'bg-primary',
      yellow: 'bg-yellow text-gray-950',
    },
    size: {
      md: 'w-[32.7rem] h-[5.6rem]',
      sm: 'w-[27.6rem] h-[4.8rem]',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'primary',
  },
});

export function Button({
  icon,
  children,
  size,
  color,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        ButtonVariants({ size, color }),
        'flex items-center justify-center gap-[1.2rem]',
        className,
      )}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
}
