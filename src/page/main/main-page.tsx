import BottomSheet from '@widgets/main/bottom-sheet/bottom-sheet';
import { RadioContent } from '@widgets/main/bottom-sheet/contents/radio/radio-content';
import { useState } from 'react';

export type SortType = 'latest' | 'near';

const MainPage = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [sortType, setSortType] = useState<SortType>('latest');

  return (
    <div>
      <BottomSheet.Root isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <BottomSheet.Overlay />
        <BottomSheet.Container size="sm">
          <BottomSheet.Header title="정렬" />
          <BottomSheet.Content>
            <RadioContent value={sortType} onChange={setSortType} />
          </BottomSheet.Content>
        </BottomSheet.Container>
      </BottomSheet.Root>
    </div>
  );
};
export default MainPage;
