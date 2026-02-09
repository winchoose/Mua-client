import { TopNavigation } from '@shared/ui/topNavigation';
import ArrowLeftIcon from '@shared/assets/icon/arrow-left.svg?react';
import MapPingIcon from '@shared/assets/icon/map-pin.svg?react';
import { useNavigate } from 'react-router';
import { ModalButton } from '@widgets/create/modal-button';
import Input from '@shared/ui/input';
import { DropDown } from '@widgets/create/dropDown';
import { useState } from 'react';
import { DROPDOWN_OPTIONS } from '@page/constants/dropdown-option';
import { Textarea } from '@widgets/create/textarea';
import { Button } from '@shared/ui/button';
import { AddImage } from '@widgets/create/add-image';
import Modal from '@widgets/create/modal/modal';
import { ModalLocationSearch } from '@widgets/create/modal/contents/modal-location-search';
import { DateTimePicker } from '@widgets/create/modal/contents/wheel/date-time-picker';
type CreateModalType = 'location' | 'datetime' | null;

const CreatPage = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [count, setCount] = useState('');
  const [round, setRound] = useState('');
  const [time, setTime] = useState('');
  const [openModal, setOpenModal] = useState<CreateModalType>(null);
  const navigate = useNavigate();
  const [location, setLocation] = useState<string>(''); // 최종 확정 값
  const [tempLocation, setTempLocation] = useState<string>(''); // 모달용 임시 값
  const [dateTime, setDateTime] = useState<{
    dateText: string;
    hour: string;
    minute: string;
  } | null>(null);

  // 모달 안에서 임시로 쓰는 값
  const [tempDateTime, setTempDateTime] = useState<{
    dateText: string;
    hour: string;
    minute: string;
  } | null>(null);
  return (
    <div className="flex flex-col gap-[2rem]">
      <TopNavigation
        leftIcon={<ArrowLeftIcon width={'2.4rem'} height={'2.4rem'} />}
        onLeftClick={() => navigate(-1)}
      />
      <div className="typo-h1 px-[2.4rem] pb-[2rem]">게시글 작성하기</div>
      <div className="flex flex-col gap-[0.8rem] px-[2.4rem]">
        <span className="typo-body1">
          제목 <span className="text-red">*</span>
        </span>
        <Input
          placeholder="제목을 입력하세요"
          inputSize="lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <DropDown
        label="인원 수"
        value={count}
        placeholder="선택해주세요"
        options={DROPDOWN_OPTIONS.PERSON_COUNT}
        onChange={setCount}
      />

      <DropDown
        label="라운드"
        value={round}
        placeholder="선택해주세요"
        options={DROPDOWN_OPTIONS.ROUND}
        onChange={setRound}
      />

      <DropDown
        label="타이머"
        value={time}
        placeholder="선택해주세요"
        options={DROPDOWN_OPTIONS.TIME}
        onChange={setTime}
      />
      <ModalButton
        label="장소"
        placeholder={
          location || (
            <span className="flex gap-[0.8rem]">
              <MapPingIcon width="2.4rem" height="2.4rem" />
              클릭하여 장소 선택
            </span>
          )
        }
        onClick={() => {
          setTempLocation(location); // 열 때 기존 값 복사
          setOpenModal('location');
        }}
      />

      <ModalButton
        label="일시"
        placeholder={
          dateTime
            ? `${dateTime.dateText} ${dateTime.hour}:${dateTime.minute}`
            : '날짜 입력'
        }
        onClick={() => setOpenModal('datetime')}
      />
      <div className=" flex flex-col gap-[0.8rem] px-[2.4rem]">
        <span className="typo-body1">
          내용 입력 <span className="text-red">*</span>
        </span>
        <Textarea
          placeholder="게시글 내용을 작성해주세요"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <AddImage max={5} />
      <div className="px-[2.4rem] pb-[2rem]">
        <Button
          size="md"
          onClick={() => {
            if (!title || !text || !location || !dateTime) {
              alert('필수 항목을 입력해주세요');
              return;
            }

            const payload = {
              title,
              text,
              count,
              round,
              time,
              location,
              dateTime,
              // images: 추후
            };

            console.log('업로드 payload:', payload);

            navigate('/');
          }}
        >
          업로드
        </Button>
      </div>
      <Modal.Root
        isOpen={openModal !== null}
        onClose={() => setOpenModal(null)}
      >
        <Modal.Overlay />

        {/* 장소 선택 (md) */}
        {openModal === 'location' && (
          <Modal.Container size="md">
            <Modal.Header title="장소 선택" />
            <Modal.Content>
              <ModalLocationSearch
                value={tempLocation}
                onChange={(next) => {
                  setTempLocation(next);
                }}
              />
            </Modal.Content>
            <Modal.Footer
              onConfirm={() => {
                setLocation(tempLocation); // ✅ 여기서 확정
                setOpenModal(null);
              }}
            />
          </Modal.Container>
        )}

        {/* 날짜/시간 선택 (sm) */}
        {openModal === 'datetime' && (
          <Modal.Container size="sm">
            <Modal.Header title="일시 선택" />
            <Modal.Content>
              <DateTimePicker
                onChange={(value) => {
                  setTempDateTime(value);
                }}
              />
            </Modal.Content>
            <Modal.Footer
              onConfirm={() => {
                if (tempDateTime) {
                  setDateTime(tempDateTime);
                }
                setOpenModal(null);
              }}
            />
          </Modal.Container>
        )}
      </Modal.Root>
    </div>
  );
};

export default CreatPage;
