import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/User';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const onClose = useCallback(() => {
    setIsAuthModal(() => false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(() => true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onLogout}>
          {t('Выйти')}
        </Button>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.links} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal onClose={onClose} isOpen={isAuthModal} />}
    </header>
  );
});

