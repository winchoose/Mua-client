import type { InputHTMLAttributes, ReactNode } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputSize: InputSize;
  icon?: ReactNode;
}
const baseInput = `
  h-[5.6rem]
  text-body1

  border
  border-gray-200
  text-gray-300

  rounded-[12px]
  transition-colors

  focus:border-primary
  focus:text-gray-950
  focus:outline-none

 [&:not(:placeholder-shown)]:border-gray-950
 [&:not(:placeholder-shown)]:text-gray-950

  p-[1.6rem]
`;

const sizeStyles: Record<InputSize, string> = {
  sm: 'w-[26.3rem] px-[1.2rem]',
  md: 'w-[26.7rem]',
  lg: 'w-[32.7rem]',
};

const Input = ({ inputSize = 'md', icon, className, ...props }: InputProps) => {
  return (
    <div className="relative group">
      {icon && (
        <span
          className="absolute left-[1.1rem] top-1/2
          -translate-y-1/2 pointer-events-none focus:text-primary
          text-gray-300 group-focus-within:text-primary 
          group-[&:has(input:not(:placeholder-shown))]:text-gray-950"
        >
          {icon}
        </span>
      )}
      <input
        placeholder=" "
        className={`
            ${baseInput}
            ${sizeStyles[inputSize]}
            ${icon ? 'pl-[4.7rem]' : ''}`}
        {...props}
      />
    </div>
  );
};
export default Input;
