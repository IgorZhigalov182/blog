import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui';
import cls from './SidebarItem.module.scss';
import { getUserAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/sidebar';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink, Icon } from '@/shared/ui/redesigned';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed?: boolean;
}

export const SidebarItem = memo(
  (props: PropsWithChildren<SidebarItemProps>) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
      return null;
    }

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <AppLinkDeprecated
            theme={AppLinkTheme.INVERTED}
            to={item.path}
            className={classNames(cls.item, { [cls.collapsed]: collapsed }, [])}
          >
            <item.Icon className={cls.icon} />
            <span
              className={classNames(
                cls.link,
                { [cls.linkHidden]: collapsed },
                [],
              )}
            >
              {t(item.text)}
            </span>
          </AppLinkDeprecated>
        }
        on={
          <AppLink
            to={item.path}
            className={classNames(
              cls.itemRedesigned,
              { [cls.collapsedRedesigned]: collapsed },
              [],
            )}
            activeClassName={cls.active}
          >
            <Icon Svg={item.Icon} />
            <span
              className={classNames(
                cls.link,
                { [cls.linkHidden]: collapsed },
                [],
              )}
            >
              {t(item.text)}
            </span>
          </AppLink>
        }
      />
    );
  },
);
