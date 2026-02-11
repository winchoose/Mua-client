import Clock from '@shared/assets/icon/clock.svg?react';
import UserIcon from '@shared/assets/icon/user.svg?react';
import MapPinIcon from '@shared/assets/icon/map-pin.svg?react';
interface CardInfoProps {
  date: string;
  count: string;
  location: string;
  mode?: 'card' | 'detail';
}

const containerStyle = {
  card: 'gap-[0.3rem] typo-caption text-gray-400',
  detail: 'gap-[0.8rem] typo-body2',
};

const iconSize = {
  card: '1.6rem',
  detail: '2.4rem',
};

export function CardInfo({
  date,
  count,
  location,
  mode = 'card',
}: CardInfoProps) {
  return (
    <div className={`flex flex-col ${containerStyle[mode]}`}>
      <p className="flex gap-[0.6rem] items-center">
        <Clock width={iconSize[mode]} height={iconSize[mode]} />
        {date}
      </p>

      <p className="flex gap-[0.6rem] items-center">
        <UserIcon width={iconSize[mode]} height={iconSize[mode]} />
        {count}
      </p>

      <p className="flex gap-[0.6rem] items-center">
        <MapPinIcon width={iconSize[mode]} height={iconSize[mode]} />
        {location}
      </p>
    </div>
  );
}
