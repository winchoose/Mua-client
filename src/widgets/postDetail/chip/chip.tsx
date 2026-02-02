import { ChipButton } from '@widgets/postDetail/chip/chipButton';

export type ApprovalStatus = 'approved' | 'rejected' | 'pending';

interface BaseChipProps {
  status: ApprovalStatus;
}

interface DisplayChipProps extends BaseChipProps {
  mode: 'display';
}

interface ActionChipProps extends BaseChipProps {
  mode: 'action';
  onChange: (status: Exclude<ApprovalStatus, 'pending'>) => void;
}

export type ChipProps = DisplayChipProps | ActionChipProps;

export function Chip(props: ChipProps) {
  const { status } = props;

  if (props.mode === 'display') {
    return (
      <div className="flex gap-[0.8rem]">
        <ChipButton
          label="승인"
          variant="approve"
          active={status === 'approved'}
          disabled
        />
        <ChipButton
          label="거절"
          variant="reject"
          active={status === 'rejected'}
          disabled
        />
      </div>
    );
  }

  return (
    <div className="flex gap-[0.8rem]">
      <ChipButton
        label="승인"
        variant="approve"
        active={status === 'approved'}
        onClick={() => props.onChange('approved')}
      />
      <ChipButton
        label="거절"
        variant="reject"
        active={status === 'rejected'}
        onClick={() => props.onChange('rejected')}
      />
    </div>
  );
}
