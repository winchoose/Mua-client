import { useMemo } from 'react';
import { cn } from '@shared/utils/cn';

interface WheelProps {
  items: string[];
  value: number; // 선택된 index
  onChange: (index: number) => void;
  className?: string;
}

const ITEM_HEIGHT = 40; // 4rem

export function Wheel({ items, value, onChange, className }: WheelProps) {
  const listClass = useMemo(
    () =>
      cn(
        'h-full overflow-y-scroll snap-y snap-mandatory text-center',
        '[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
      ),
    [],
  );

  return (
    <div className={cn('relative h-[10.4rem] overflow-hidden', className)}>
      {/* 중앙 선택 영역 */}
      <div className="pointer-events-none absolute top-1/2 left-0 right-0 h-[4rem] -translate-y-1/2 border-y border-gray-200" />

      {/* 위/아래 흐림 */}
      <div className="pointer-events-none absolute top-0 h-[4rem] w-full bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute bottom-0 h-[4rem] w-full bg-gradient-to-t from-white to-transparent" />

      <ul
        className={cn(listClass, 'pt-[3.2rem] pb-[3.2rem]')}
        onScroll={(e) => {
          const index = Math.round(e.currentTarget.scrollTop / ITEM_HEIGHT);
          onChange(index);
        }}
      >
        {items.map((item, index) => (
          <li
            key={`${item}-${index}`}
            className={cn(
              'h-[4rem] flex items-center typo-body1 justify-center snap-center transition-all',
              index === value ? 'text-gray-950' : 'text-gray-300',
            )}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
