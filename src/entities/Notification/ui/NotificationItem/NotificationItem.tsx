import { memo, type PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Card,
  CardDeprecated,
  CardTheme,
  Text,
  TextDeprecated,
} from '@/shared/ui';
import { Notification } from '../../model/types/Notification';
import cls from './NotificationItem.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface NotificationItemProps {
  className?: string;
  item: Notification;
}

export const NotificationItem = memo(
  (props: PropsWithChildren<NotificationItemProps>) => {
    const { className, item } = props;

    const content = (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <CardDeprecated
            theme={CardTheme.OUTLINE}
            className={classNames(cls.NotificationItem, {}, [className])}
          >
            <TextDeprecated
              title={item.title}
              text={item.description}
            />
          </CardDeprecated>
        }
        on={
          <Card className={classNames(cls.NotificationItem, {}, [className])}>
            <Text
              title={item.title}
              text={item.description}
            />
          </Card>
        }
      />
    );

    if (item.href) {
      return (
        <a
          className={classNames(cls.link, {}, [])}
          target="_blank"
          href={item.href}
          rel="noreferrer"
        >
          {content}
        </a>
      );
    }

    return content;
  },
);
