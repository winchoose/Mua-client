import { ModalContext, useModalContext } from '@shared/hooks/use-modal-context';
import { Button } from '@shared/ui/button';
import { cn } from '@shared/utils/cn';
import { cva } from 'class-variance-authority';
import type { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

function Overlay() {
  const { onClose } = useModalContext();

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/30 backdrop-blur"
    />
  );
}

function Root({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <ModalContext.Provider value={{ onClose }}>
      <div className="fixed inset-0 z-40 flex items-center justify-center">
        {children}
      </div>
    </ModalContext.Provider>
  );
}

const containerVariants = cva('w-[30rem] bg-white rounded-[16px] z-50', {
  variants: {
    size: {
      sm: 'h-[33.5rem]',
      md: 'h-[40.4rem]',
    },
  },
});

function Container({
  size,
  children,
}: {
  size?: 'sm' | 'md';
  children: ReactNode;
}) {
  return <div className={cn(containerVariants({ size }))}>{children}</div>;
}

function Header({
  title,
  rightAction,
}: {
  title: string;
  rightAction?: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex h-[5rem] items-center justify-center pt-[2.1rem] relative">
        <p className="typo-h3">{title}</p>
        <button className="absolute typo-body3 text-gray-950 right-[1.2rem]">
          {rightAction}
        </button>
      </div>
    </div>
  );
}

interface FooterProps {
  label?: string;
  onConfirm: () => void;
}

function Footer({ label = '확인', onConfirm }: FooterProps) {
  return (
    <div className="flex justify-center">
      <Button size="sm" onClick={onConfirm}>
        {label}
      </Button>
    </div>
  );
}

function Content({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 justify-center items-center">{children}</div>
  );
}

const Modal = {
  Root,
  Overlay,
  Container,
  Header,
  Content,
  Footer,
};

export default Modal;
