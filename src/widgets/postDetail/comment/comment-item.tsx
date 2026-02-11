import MessageIcon from '@shared/assets/icon/message-square.svg?react';
import { Chip, type ApprovalStatus } from '@widgets/postDetail/chip/chip';
export interface CommentItemProps {
  id: number;
  author: string;
  time: string;
  value: string;
  parentId?: number | null;
  type?: 'user' | 'system';

  status?: ApprovalStatus;
  applicantId?: number;
}

interface CommentItemUIProps extends CommentItemProps {
  isOwner?: boolean;
  onChangeApproval?: (
    commentId: number,
    status: Exclude<ApprovalStatus, 'pending'>,
  ) => void;
}

export function CommentItem({
  author,
  time,
  value,
  type = 'user',
  status = 'pending',
  isOwner = false,
  onChangeApproval,
  id,
}: CommentItemUIProps) {
  const isSystem = type === 'system';

  return (
    <div className="flex gap-[0.8rem]">
      <img className="w-[3.6rem] h-[3.6rem] rounded-full border" />

      <div className="flex flex-col flex-1">
        {/* 상단 라인: 작성자/시간 + (system이면 chip 우측) */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-[0.4rem]">
            <span className="typo-body3">{author}</span>
            <span className="typo-caption">{time}</span>
          </div>

          {isSystem &&
            (isOwner ? (
              <Chip
                mode="action"
                status={status}
                onChange={(next) => onChangeApproval?.(id, next)}
              />
            ) : (
              <Chip mode="display" status={status} />
            ))}
        </div>

        {/* 본문 */}
        <div className="mt-[0.4rem]">
          <p className="typo-body1 whitespace-pre-line">{value}</p>

          {!isSystem && (
            <button className="mt-[0.6rem] flex gap-[0.4rem] items-center typo-caption text-gray-500">
              <MessageIcon width={'1.8rem'} height={'1.8rem'} />
              답글 쓰기
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
