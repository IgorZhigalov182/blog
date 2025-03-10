import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetNotificationsQuery } from '../../api/notificationApi';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  VStack,
  SkeletonDeprecated,
  Skeleton as SkeletonRedesigned,
} from '@/shared/ui';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { toggleFeatures } from '@/shared/lib/features';

interface NotificationListProps {
  className?: string;
}

export const NotificationList = memo(
  (props: PropsWithChildren<NotificationListProps>) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      data: notifications,
      isLoading,
      error,
    } = useGetNotificationsQuery(null, {
      pollingInterval: 5000,
    });

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      off: () => SkeletonDeprecated,
      on: () => SkeletonRedesigned,
    });

    if (isLoading) {
      return (
        <div className={classNames('', {}, [className])}>
          <VStack
            max
            gap="8"
          >
            <Skeleton
              height="80px"
              width="100%"
              border="8px"
            />
            <Skeleton
              height="80px"
              width="100%"
              border="8px"
            />
            <Skeleton
              height="80px"
              width="100%"
              border="8px"
            />
          </VStack>
        </div>
      );
    }

    return (
      <div className={classNames('', {}, [className])}>
        <VStack
          max
          gap="8"
        >
          {notifications?.map((item) => (
            <NotificationItem
              item={item}
              key={item.id}
            />
          ))}
        </VStack>
      </div>
    );
  },
);
