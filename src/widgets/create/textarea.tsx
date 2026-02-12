import { cn } from '@shared/utils/cn';
import { cva } from 'class-variance-authority';
import type { ComponentProps } from 'react';

type TextareaProps = ComponentProps<'textarea'>;

const textVariants = cva(`
    w-full
    h-[20rem]
    text-body1
    resize-none
    border
    border-gray-200
    rounded-[16px]
    transition-colors
    outline-none
    p-[1.6rem]
    focus:border-primary
    focus:text-gray-950
    [&:not(:focus):not(:placeholder-shown)]:border-gray-950
    [&:not(:focus):not(:placeholder-shown)]:text-gray-950
    placeholder:text-gray-300
`);

export function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={cn(textVariants(), className)} {...props} />;
}
