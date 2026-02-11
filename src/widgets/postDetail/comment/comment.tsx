import {
  CommentItem,
  type CommentItemProps,
} from '@widgets/postDetail/comment/comment-item';

interface CommentProps {
  comments: CommentItemProps[];
}

export function Comment({ comments }: CommentProps) {
  const systemRoot = comments.filter(
    (c) => c.parentId === null && c.type === 'system',
  );

  const userRoot = comments.filter(
    (c) => c.parentId === null && c.type !== 'system',
  );

  return (
    <div className="flex flex-col gap-[1.2rem]">
      <span className="typo-body2">댓글 {comments.length}</span>
      <div className="flex flex-col gap-[2.4rem]">
        {systemRoot.map((comment) => (
          <CommentItem key={comment.id} {...comment} />
        ))}

        {userRoot.map((comment) => (
          <div className="flex flex-col gap-[2rem]" key={comment.id}>
            <CommentItem {...comment} />

            <div className="flex flex-col gap-[1rem] pl-[4.4rem]">
              {comments
                .filter((c) => c.parentId === comment.id)
                .map((reply) => (
                  <CommentItem key={reply.id} {...reply} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
