import { TopNavigation } from '@shared/ui/topNavigation';
import { useNavigate } from 'react-router-dom';
import ArrowLeftIcon from '@shared/assets/icon/arrow-left.svg?react';
import UploadIcon from '@shared/assets/icon/upload.svg?react';
import { Carousel } from '@widgets/postDetail/carousel/carousel';
import { DetailInfo } from '@widgets/postDetail/detail-info';
import { Comment } from '@widgets/postDetail/comment/comment';
import type { CommentItemProps } from '@widgets/postDetail/comment/comment-item';
import Input from '@shared/ui/input';
import { FloatingActionButton } from '@shared/ui/floatingActionButton';
import SendIcon from '@shared/assets/icon/send.svg?react';
import { Button } from '@shared/ui/button';
export const mockComments: CommentItemProps[] = [
  // ===== 시스템 메시지 (최상단 고정 대상) =====
  {
    id: 100,
    author: '시스템',
    time: '방금 전',
    value: '홍길동님의 참가 신청이 승인 대기중입니다.',
    parentId: null,
    type: 'system',
    status: 'pending',
  },
  {
    id: 101,
    author: '시스템',
    time: '10분 전',
    value: '김철수님의 참가 신청이 승인되었습니다.',
    parentId: null,
    type: 'system',
    status: 'approved',
  },
  {
    id: 102,
    author: '시스템',
    time: '30분 전',
    value: '이영희님의 참가 신청이 거절되었습니다.',
    parentId: null,
    type: 'system',
    status: 'rejected',
  },

  // ===== 일반 댓글 =====
  {
    id: 1,
    author: '승택',
    time: '19시간 전',
    value: '제발 저요!!!',
    parentId: null,
    type: 'user',
  },

  // ===== 대댓글 (id:1의 답글) =====
  {
    id: 2,
    author: '작성자',
    time: '18시간 전',
    value: '확인했어요! 잠시만 기다려주세요.',
    parentId: 1,
    type: 'user',
  },
  {
    id: 3,
    author: '승택',
    time: '17시간 전',
    value: '감사합니다 🙏',
    parentId: 1,
    type: 'user',
  },

  // ===== 다른 일반 댓글 =====
  {
    id: 4,
    author: '홍길동',
    time: '2시간 전',
    value: '저도 가능할까요?',
    parentId: null,
    type: 'user',
  },

  // ===== 대댓글 (id:4의 답글) =====
  {
    id: 5,
    author: '작성자',
    time: '1시간 전',
    value: '네! 신청 남겨주세요.',
    parentId: 4,
    type: 'user',
  },
];

const handleShare = async () => {
  const url = window.location.href;

  if (navigator.share) {
    try {
      await navigator.share({
        title: '역삼동 공터에서 경도 할 사람 찾고 있어요!',
        text: '같이 경도 하실 분 구해요!',
        url,
      });
    } catch (error) {
      console.log('공유 취소');
    }
  } else {
    // fallback은 아래에서 설명
  }
};

const isOwner = false;
const isApplied = false;
const isClosed = false;

const canApply = !isOwner && !isApplied && !isClosed;

const PostDetailPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <TopNavigation
        leftIcon={<ArrowLeftIcon width={'2.4rem'} height={'2.4rem'} />}
        rightIcon={<UploadIcon width={'2.4rem'} height={'2.4rem'} />}
        onLeftClick={() => navigate(-1)}
        onRightClick={handleShare}
      />
      <Carousel>
        <img src="/img/1.jpg" alt="" />
        <img src="/img/2.jpg" alt="" />
        <img src="/img/3.jpg" alt="" />
      </Carousel>
      <p className="h-[10.6rem] px-[2.4rem] py-[2rem] typo-h2 border-b">
        역삼동 공터에서 경도 할 사람 찾고 있어요!!(성인만)
      </p>
      <div className="flex flex-col px-[2.4rem] justify-center">
        <DetailInfo />
        <p className="typo-body1 w-[32.7rem] py-[2rem] border-b">
          {
            '역삼동 공터에서 경도 하실 분 구합니다~~ 20세 이상 성인분들만 모집하고 있어요! 즐겁게 하실 분들만 신청해주셨으면 좋겠어요~'
          }
        </p>
      </div>
      <div className="px-[2.4rem] py-[2rem] border-b">
        <Comment comments={mockComments} />
      </div>
      {canApply && (
        <div className="flex flex-col items-center pt-[2rem]">
          <Button>참가 신청하기</Button>
          <div className="flex gap-[1.6rem] justify-center py-[1.4rem]">
            <Input inputSize="sm" placeholder="댓글을 입력해주세요" />
            <FloatingActionButton
              mode="inline"
              icon={<SendIcon width={'2rem'} height={'2rem'} />}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetailPage;
