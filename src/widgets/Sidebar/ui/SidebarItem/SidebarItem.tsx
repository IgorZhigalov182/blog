import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui';
import cls from './SidebarItem.module.scss';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = memo((props: PropsWithChildren<SidebarItemProps>) => {
  const { item, collapsed } = props;
  const { t } = useTranslation();

  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <AppLink
      theme={AppLinkTheme.INVERTED}
      to={item.path}
      className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
    >
      <item.Icon className={cls.icon} />
      <span className={cls.link}>{t(item.text)}</span>
    </AppLink>
  );
});
