import { useMemo, useState } from 'react';
import { Wheel } from './wheel';
import { generateFutureDates } from '@shared/utils/date';

interface DateTimePickerProps {
  days?: number; // 미래 며칠까지 보여줄지
  onChange?: (result: {
    dateText: string;
    hour: string;
    minute: string;
  }) => void;
}

export function DateTimePicker({ days = 30, onChange }: DateTimePickerProps) {
  const dates = useMemo(() => generateFutureDates(days), [days]);
  const hours = useMemo(
    () => Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0')),
    [],
  );
  const minutes = useMemo(
    () => Array.from({ length: 6 }, (_, i) => String(i * 10).padStart(2, '0')),
    [],
  );

  const [dateIndex, setDateIndex] = useState(0);
  const [hourIndex, setHourIndex] = useState(0);
  const [minuteIndex, setMinuteIndex] = useState(0);

  const emit = (next?: Partial<{ d: number; h: number; m: number }>) => {
    const d = next?.d ?? dateIndex;
    const h = next?.h ?? hourIndex;
    const m = next?.m ?? minuteIndex;

    const result = {
      dateText: dates[d] ?? dates[0],
      hour: hours[h] ?? hours[0],
      minute: minutes[m] ?? minutes[0],
    };

    console.log('선택된 값:', result);

    onChange?.(result);
  };

  return (
    <div className="flex h-[21.7rem] items-center justify-center gap-[2.8rem]">
      <Wheel
        className="w-[10.8rem]"
        items={dates}
        value={dateIndex}
        onChange={(i) => {
          setDateIndex(i);
          emit({ d: i });
        }}
      />
      <div className="flex gap-[1.6rem]">
        <Wheel
          className="w-[4rem]"
          items={hours}
          value={hourIndex}
          onChange={(i) => {
            setHourIndex(i);
            emit({ h: i });
          }}
        />
        <Wheel
          className="w-[4rem]"
          items={minutes}
          value={minuteIndex}
          onChange={(i) => {
            setMinuteIndex(i);
            emit({ m: i });
          }}
        />
      </div>
    </div>
  );
}
