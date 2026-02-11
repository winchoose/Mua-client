import { createContext, useContext } from 'react';

interface BottomSheetContextValue {
  onClose: () => void;
}

const BottomSheetContext = createContext<BottomSheetContextValue | null>(null);

export function useBottomSheetContext() {
  const ctx = useContext(BottomSheetContext);
  if (!ctx) throw new Error('BottomSheet 내부에서만 사용 가능');
  return ctx;
}

export { BottomSheetContext };
