import { CardInfo } from '@widgets/main/card/card-info';
import { CardTitle } from '@widgets/main/card/card-title';

interface CardProps {
  image?: string;
  title: string;
  date: string;
  count: string;
  location: string;
}

export function Card({ image, title, date, count, location }: CardProps) {
  return (
    <div className="flex flex-low gap-[1.6rem] w-[32.7rem] h-[14.8rem] pb-[2rem] border-b border-gray-100">
      <div className="w-[10.2rem] h-[12.8rem] shrink-0 border rounded-[8px]">
        <img src={image} />
      </div>
      <div className="flex flex-col gap-[1.2rem]">
        <CardTitle title={title} />
        <CardInfo date={date} count={count} location={location} />
      </div>
    </div>
  );
}
