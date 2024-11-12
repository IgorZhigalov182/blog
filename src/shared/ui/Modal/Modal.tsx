import { ReactNode } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Portal } from '@/shared/ui/Portal/Portal';
import { Overlay } from '../Overlay/Overlay';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose, lazy } = props;
  const { close, isMounted, isClosing } = useModal({ isOpen, onClose, animationDelay: 300 });

  const mods: Mods = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  if (lazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(cls.modal, mods, [className, 'app_modal'])}>
        <Overlay onClick={close} />
        <div className={cls.content}>{children}</div>
      </div>
    </Portal>
  );
};
