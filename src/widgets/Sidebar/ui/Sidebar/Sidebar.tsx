import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  AppLogo,
  ButtonDeprecated as Button,
  ButtonSize,
  ThemeButton,
  VStack,
} from '@/shared/ui';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { LangSwitcher } from '@/features/LangSwitcher';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

interface SidebarProps {
  className?: string;
  collapsed: boolean;
  onToggle: () => void;
  sidebarItemsList: any[];
}

const DeprecatedSidebar = ({
  className,
  collapsed,
  onToggle,
  sidebarItemsList,
}: SidebarProps) => {
  return (
    <aside
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        theme={ThemeButton.BACKGROUND_INVERTED}
        size={ButtonSize.M}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <VStack
        role="navigation"
        gap="8"
        align="start"
        className={cls.items}
      >
        {sidebarItemsList.map((item) => (
          <SidebarItem
            key={item.path}
            collapsed={collapsed}
            item={item}
          />
        ))}
      </VStack>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          short={collapsed}
          className={cls.lang}
        />
      </div>
    </aside>
  );
};

const RedesignedSidebar = ({
  className,
  collapsed,
  sidebarItemsList,
  onToggle,
}: SidebarProps) => {
  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        cls.SidebarRedesigned,
        { [cls.collapsedRedesigned]: collapsed },
        [className],
      )}
    >
      <AppLogo
        size={collapsed ? 30 : 50}
        className={cls.appLogo}
      />
      <VStack
        role="navigation"
        align="start"
        className={cls.items}
      >
        {sidebarItemsList.map((item) => (
          <SidebarItem
            key={item.path}
            collapsed={collapsed}
            item={item}
          />
        ))}
      </VStack>
      <Icon
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={cls.collapseBtn}
        Svg={ArrowIcon}
        clickable
      />
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher
          short={collapsed}
          className={cls.lang}
        />
      </div>
    </aside>
  );
};

export const Sidebar = memo(({ className }: { className?: string }) => {
  const [collapsed, setCollapsed] = useState(false);
  const sidebarItemsList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <DeprecatedSidebar
          className={className}
          collapsed={collapsed}
          onToggle={onToggle}
          sidebarItemsList={sidebarItemsList}
        />
      }
      on={
        <RedesignedSidebar
          collapsed={collapsed}
          className={className}
          sidebarItemsList={sidebarItemsList}
          onToggle={onToggle}
        />
      }
    />
  );
});
