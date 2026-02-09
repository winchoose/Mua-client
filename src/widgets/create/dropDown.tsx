import ChevronDownIcon from '@shared/assets/icon/chevron-down.svg?react';
import { useState } from 'react';
interface DropDownProps {
  label: string;
  value?: string;
  options: string[];
  placeholder?: string;
  onChange: (value: string) => void;
}

const ITEM_HEIGHT = 37;
const MAX_VISIBLE = 7;

export function DropDown({
  label,
  value,
  placeholder,
  options,
  onChange,
}: DropDownProps) {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative flex flex-col gap-[0.8rem] w-full h-[8.8rem] px-[2.4rem] typo-body1">
      <p>
        {label}
        <span className="text-red"> *</span>
      </p>
      <button
        className="flex items-center justify-between w-[32.7rem] border rounded-[16px] h-[5.6rem] p-[1.6rem]"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={value ? 'text-gray-950' : 'text-gray-300'}>
          {value || placeholder}
        </span>
        <ChevronDownIcon width={'2rem'} height={'2rem'} />
      </button>
      {open && (
        <ul
          className="
      absolute right-[2.4rem] z-10 top-[8.9rem]
      w-[16rem]
      border border-gray-200 rounded-[16px]
      bg-white
      shadow-[0_2px_4px_0_rgba(0,0,0,0.08)]
      overflow-y-auto
    "
          style={{
            maxHeight:
              options.length > MAX_VISIBLE
                ? `${ITEM_HEIGHT * MAX_VISIBLE}px`
                : 'auto',
          }}
        >
          {options.map((option) => (
            <li key={option}>
              <button
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className="
            text-left w-full h-[3.7rem]
            px-[1.6rem] py-[0.8rem]
            border-b border-gray-100
          "
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
