import { memo, ReactNode } from 'react';
import cls from './Tabs.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '../Card/Card';

export interface TabItem {
  value: string;
  content: ReactNode;
}

type TabsProps = {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
};

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick } = props;

  return (
    <div className={classNames(cls.tabs, {}, [className])}>
      {tabs.map((tab) => (
        <Card
          theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINE}
          key={tab.value}
          className={cls.tab}
          onClick={() => onTabClick(tab)}
        >
          {tab.content}
        </Card>
      ))}
    </div>
  );
});
