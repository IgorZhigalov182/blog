import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotifciationButton } from '@/features/notificationButton';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false);
  const authData = useSelector(getUserAuthData);

  const onClose = useCallback(() => {
    setIsAuthModal(() => false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(() => true);
  }, []);

  if (authData) {
    return (
      <header className={classNames(cls.Navbar, {}, [className])}>
        <AppLink to={RoutePath.main} className={cls.mainLink} theme={AppLinkTheme.INVERTED}>
          <Text title={t('Igor182')} />
        </AppLink>
        <AppLink to={RoutePath.article_create} theme={AppLinkTheme.INVERTED}>
          {t('Создать статью')}
        </AppLink>
        <HStack gap="16" className={cls.actions}>
          <NotifciationButton />
          <AvatarDropdown />
        </HStack>
      </header>
    );
  }

  return (
    <header className={classNames(cls.Navbar, {}, [className])}>
      <Button theme={ThemeButton.CLEAR_INVERTED} className={cls.avatar} onClick={onShowModal}>
        {t('Войти')}
      </Button>
      {isAuthModal && <LoginModal onClose={onClose} isOpen={isAuthModal} />}
    </header>
  );
});
