import { createContext, useContext } from 'react';

interface ModalContextValue {
  onClose: () => void;
}

export const ModalContext = createContext<ModalContextValue | null>(null);

export function useModalContext() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModalContext must be used within Modal.Root');
  }

  return context;
}
