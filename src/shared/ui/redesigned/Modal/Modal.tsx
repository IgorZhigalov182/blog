import { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Modal.module.scss';
import { Portal } from '../Portal/Portal';
import { toggleFeatures } from '@/shared/lib/features';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { close, isMounted, isClosing } = useModal({
    isOpen,
    onClose,
    animationDelay: 300,
  });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal element={document?.getElementById('app') ?? document.body}>
      <div
        className={classNames(cls.modal, mods, [
          className,
          'app_modal',
          toggleFeatures({
            name: 'isAppRedesigned',
            off: () => cls.modalOld,
            on: () => cls.modalNew,
          }),
        ])}
      >
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
