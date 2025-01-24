import { memo, useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getUserAuthData,
  getUserIsAdmin,
  getUserIsManager,
  userActions,
} from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Avatar, AvatarDeprecated, DropdownDeprecated } from '@/shared/ui';

import { getRouteAdmin, getRouteProfile } from '@/shared/const/router';
import { ToggleFeatures } from '@/shared/lib/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups/ui/Dropdown/Dropdown';

interface AvatarDropdownProps {
  className?: string;
}

export const AvatarDropdown = memo(
  (props: PropsWithChildren<AvatarDropdownProps>) => {
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

    const items = [
      ...(isUserAdminOrManager
        ? [{ content: t('Админка'), href: getRouteAdmin() }]
        : []),
      { content: t('Профиль'), href: `${getRouteProfile(authData.id)}` },
      { content: t('Выйти'), onClick: onLogout },
    ];

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        on={
          <Dropdown
            className={classNames('', {}, [className])}
            items={items}
            trigger={
              <Avatar
                size={40}
                src={authData?.avatar}
              />
            }
            direction="bottom left"
          />
        }
        off={
          <DropdownDeprecated
            className={classNames('', {}, [className])}
            items={items}
            trigger={
              <AvatarDeprecated
                fallbackInverted
                size={30}
                src={authData?.avatar}
              />
            }
            direction="bottom left"
          />
        }
      />
    );
  },
);
