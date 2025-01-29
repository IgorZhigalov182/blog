import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { LoginModal } from '@/features/AuthByUsername';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { NotifciationButton } from '@/features/NotificationButton';
import { getRouteArticleCreate, getRouteMain } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  AppLinkDeprecated,
  AppLinkTheme,
  ButtonDeprecated,
  Button,
  HStack,
  TextDeprecated,
  ThemeButton,
} from '@/shared/ui';
import cls from './Navbar.module.scss';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

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

  const mainClass = toggleFeatures({
    name: 'isAppRedesigned',
    off: () => cls.Navbar,
    on: () => cls.NavbarRedesigned,
  });

  if (authData) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <header className={classNames(cls.NavbarRedesigned, {}, [className])}>
            <HStack
              gap="16"
              className={cls.actions}
            >
              <NotifciationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
        off={
          <header className={classNames(cls.Navbar, {}, [className])}>
            <AppLinkDeprecated
              to={getRouteMain()}
              className={cls.mainLink}
              theme={AppLinkTheme.INVERTED}
            >
              <TextDeprecated title={t('Igor182')} />
            </AppLinkDeprecated>
            <AppLinkDeprecated
              to={getRouteArticleCreate()}
              theme={AppLinkTheme.INVERTED}
            >
              {t('Создать статью')}
            </AppLinkDeprecated>
            <HStack
              gap="16"
              className={cls.actions}
            >
              <NotifciationButton />
              <AvatarDropdown />
            </HStack>
          </header>
        }
      />
    );
  }

  return (
    <header className={classNames(mainClass, {}, [className])}>
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <ButtonDeprecated
            theme={ThemeButton.CLEAR_INVERTED}
            className={cls.enterBtn}
            onClick={onShowModal}
          >
            {t('Войти')}
          </ButtonDeprecated>
        }
        on={
          <Button
            variant="clear"
            className={cls.enterBtn}
            onClick={onShowModal}
          >
            {t('Войти')}
          </Button>
        }
      />
      {isAuthModal && (
        <LoginModal
          onClose={onClose}
          isOpen={isAuthModal}
        />
      )}
    </header>
  );
});
