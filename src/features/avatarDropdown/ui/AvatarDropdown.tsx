import { memo, useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData, getUserIsAdmin, getUserIsManager, userActions } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar, Dropdown } from '@/shared/ui';
import cls from './AvatarDropdown.module.scss';

import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo((props: PropsWithChildren<AvatarDropdownProps>) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isUserAdmin = useSelector(getUserIsAdmin);
  const authData = useSelector(getUserAuthData);
  const isUserManager = useSelector(getUserIsManager);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  const isUserAdminOrManager = isUserAdmin || isUserManager;

  if (!authData) {
    return null;
  }

  return (
    <Dropdown
      className={classNames(cls.AvatarDropdown, {}, [className])}
      items={[
        ...(isUserAdminOrManager ? [{ content: t('Админка'), href: getRouteAdmin() }] : []),
        { content: t('Профиль'), href: `${getRouteProfile(authData.id)}` },
        { content: t('Выйти'), onClick: onLogout },
      ]}
      trigger={<Avatar fallbackInverted size={30} src={authData?.avatar} />}
      direction="bottom left"
    />
  );
});
