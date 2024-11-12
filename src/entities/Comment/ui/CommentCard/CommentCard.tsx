import { memo, type PropsWithChildren } from 'react';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { Text } from '@/shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { VStack } from '@/shared/ui/Stack';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo((props: PropsWithChildren<CommentCardProps>) => {
  const { className, comment, isLoading } = props;

  if (isLoading) {
    return (
      <VStack max className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={16} className={cls.username} />
        </div>
        <Skeleton height={50} className={cls.text} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack max className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={`${RoutePath.profile}${comment.user.id}`}>
        <div className={cls.header}>
          {comment.user.avatar && <Avatar size={30} src={comment.user.avatar} />}
          <Text title={comment.user.username} />
        </div>
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </VStack>
  );
});
