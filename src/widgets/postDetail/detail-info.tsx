import { CardInfo } from '@widgets/main/card/card-info';

export function DetailInfo({}) {
  return (
    <div className="flex w-[32.7rem] gap-[2rem] flex-col border-b py-[2rem]">
      <div className="flex gap-[0.8rem]">
        <img className="w-[4.8rem] h-[4.8rem] rounded-full border" />
        <div className="flex flex-col">
          <span className="typo-body1">{'게시글 작성자'}</span>
          <span className="typo-body3">{'게시글 시간'}</span>
        </div>
      </div>
      <div className="typo-body2">
        <CardInfo
          mode="detail"
          date="01.01 / 13:40"
          count="1 / 20"
          location="개나리 공원"
        />
      </div>
    </div>
  );
}
