import {
  NotificationCard,
  type NotificationCardProps,
} from '@widgets/main/notification/notification-card';

interface NotificationPanelProps {
  notifications: NotificationCardProps[];
}

export function NotificationPanel({ notifications }: NotificationPanelProps) {
  return (
    <div className="w-[30rem] px-[1.2rem] h-[30.6rem] bg-white border border-gray-200 rounded-[12px]">
      <div className="flex h-[5.4rem] justify-between">
        <span className="w-[6.4rem] h-[2.2rem] pt-[1.2rem] typo-h3">
          알림 내역
        </span>
        <button className="w-[4.1rem] h-[1.8rem] pt-[1.4rem] typo-cation text-gray-300">
          전체삭제
        </button>
      </div>
      <div className="flex flex-col gap-[1.2rem]">
        {notifications.map((item, index) => (
          <NotificationCard key={index} value={item.value} time={item.time} />
        ))}
      </div>
    </div>
  );
}
