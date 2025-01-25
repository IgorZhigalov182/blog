import { memo, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '../Card/Card';
import cls from './Tabs.module.scss';
import { Flex, FlexDirection } from '../Stack/Flex/Flex';

export interface TabItem {
  value: string;
  content: ReactNode;
}

type TabsProps = {
  className?: string;
  tabs: TabItem[];
  value: string;
  onTabClick: (tab: TabItem) => void;
  direction?: FlexDirection;
};

export const Tabs = memo((props: TabsProps) => {
  const { className, tabs, value, onTabClick, direction = 'row' } = props;

  return (
    <Flex
      gap="8"
      align="start"
      direction={direction}
      className={classNames(cls.tabs, {}, [className])}
    >
      {tabs.map((tab) => {
        const isSelected = tab.value === value;

        return (
          <Card
            border="round"
            variant={isSelected ? 'light' : 'normal'}
            key={tab.value}
            onClick={() => onTabClick(tab)}
            className={classNames(cls.tab, { [cls.selected]: isSelected }, [])}
          >
            {tab.content}
          </Card>
        );
      })}
    </Flex>
  );
});
