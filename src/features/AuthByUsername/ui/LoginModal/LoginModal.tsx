import { Suspense, type PropsWithChildren } from 'react';
import { Loader, Modal } from '@/shared/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal = (props: PropsWithChildren<LoginModalProps>) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])} lazy>
      <Suspense fallback={<Loader />}>
        <LoginFormAsync onSuccess={onClose} />
      </Suspense>
    </Modal>
  );
};
