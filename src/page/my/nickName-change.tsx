import { TopNavigation } from '@shared/ui/topNavigation';
import ArrowLeftIcon from '@shared/assets/icon/arrow-left.svg?react';
import BellIcon from '@shared/assets/icon/bell.svg?react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { NotificationPanel } from '@widgets/main/notification/notificationPanel';
import Input from '@shared/ui/input';
import { Button } from '@shared/ui/button';

const mockNotifications = [
  {
    value:
      '“역삼동 공터에서 경도하실 분 찾아요!” 게임에서 참가가 확정되었습니다.',
    time: '방금 전',
  },
  {
    value:
      '“역삼동 공터에서 경도하실 분 찾아요!” 게임에서 참가가 확정되었습니다.',
    time: '10분 전',
  },
];

const NickNameChage = () => {
  const navigate = useNavigate();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  return (
    <div>
      <TopNavigation
        leftIcon={<ArrowLeftIcon width="2.4rem" height="2.4rem" />}
        rightIcon={<BellIcon width="2.4rem" height="2.4rem" />}
        onLeftClick={() => navigate(-1)}
        onRightClick={() => setIsNotificationOpen((prev) => !prev)}
      />
      {isNotificationOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsNotificationOpen(false)}
          />
          <div
            className="absolute right-[2.4rem] top-[5.6rem] z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <NotificationPanel notifications={mockNotifications} />
          </div>
        </>
      )}
      <p className="typo-h1 h-[6.9rem] px-[2.4rem]">닉네임 변경</p>
      <div className="flex flex-col gap-[2rem] px-[2.4rem]">
        <div className="flex flex-col gap-[0.8rem]">
          <span className="typo-body1">현재 닉네임</span>
          <Input inputSize="lg" placeholder="닉네임을 입력하세요." />
        </div>
        <div className="flex flex-col gap-[0.8rem]">
          <span className="typo-body1">변경할 닉네임</span>
          <Input inputSize="lg" placeholder="닉네임을 입력하세요." />
        </div>
      </div>
      <div className="fixed bottom-0 pb-[2rem] px-[2.4rem] ">
        <Button>저장하기</Button>
      </div>
    </div>
  );
};

export default NickNameChage;
