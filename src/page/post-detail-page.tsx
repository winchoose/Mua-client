import { TopNavigation } from '@shared/ui/topNavigation';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowLeftIcon from '@shared/assets/icon/arrow-left.svg?react';
import UploadIcon from '@shared/assets/icon/upload.svg?react';
import { Carousel } from '@widgets/postDetail/carousel/carousel';
import { DetailInfo } from '@widgets/postDetail/detail-info';
const PostDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  return (
    <div>
      <TopNavigation
        leftIcon={<ArrowLeftIcon width={'2.4rem'} height={'2.4rem'} />}
        rightIcon={<UploadIcon width={'2.4rem'} height={'2.4rem'} />}
        onLeftClick={() => navigate(-1)}
      />
      <Carousel>
        <img src="/img/1.jpg" alt="" />
        <img src="/img/2.jpg" alt="" />
        <img src="/img/3.jpg" alt="" />
      </Carousel>
      <p className="h-[10.6rem] px-[2.4rem] py-[2rem] typo-h2 border-b">
        역삼동 공터에서 경도 할 사람 찾고 있어요!!(성인만)
      </p>
      <div className="flex flex-col items-center justify-center">
        <DetailInfo />
        <p className="typo-body1 w-[32.7rem] py-[2rem] border-b">
          {
            '역삼동 공터에서 경도 하실 분 구합니다~~ 20세 이상 성인분들만 모집하고 있어요! 즐겁게 하실 분들만 신청해주셨으면 좋겠어요~'
          }
        </p>
      </div>
    </div>
  );
};

export default PostDetailPage;
