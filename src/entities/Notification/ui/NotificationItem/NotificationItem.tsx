import { memo, type PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, CardTheme } from '@/shared/ui/Card/Card';
import { Text } from '@/shared/ui/Text/Text';
import { Notification } from '../../model/types/Notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo((props: PropsWithChildren<NotificationItemProps>) => {
  const { className, item } = props;

  const content = (
    <Card theme={CardTheme.OUTLINE} className={classNames(cls.NotificationItem, {}, [className])}>
      <Text title={item.title} text={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <a className={classNames(cls.link, {}, [])} target="_blank" href={item.href} rel="noreferrer">
        {content}
      </a>
    );
  }

  return content;
});
