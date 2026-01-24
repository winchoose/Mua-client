import Clock from '@shared/assets/icon/clock.svg?react';
import UserIcon from '@shared/assets/icon/user.svg?react';
import MapPinIcon from '@shared/assets/icon/map-pin.svg?react';
interface CardInfoProps {
  date: string;
  count: string;
  location: string;
}

export function CardInfo({ date, count, location }: CardInfoProps) {
  return (
    <div className=" flex flex-col gap-[0.3rem] typo-caption">
      <p className="flex gap-[0.6rem]">
        <Clock width={'1.6rem'} height={'1.6rem'} />
        {date}
      </p>
      <p className="flex gap-[0.6rem]">
        <UserIcon width={'1.6rem'} height={'1.6rem'} />
        {count}
      </p>
      <p className="flex gap-[0.6rem]">
        <MapPinIcon width={'1.6rem'} height={'1.6rem'} />
        {location}
      </p>
    </div>
  );
}
