import { memo, type PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  AppLink,
  Avatar,
  Skeleton as SkeletonRedesigned,
  SkeletonDeprecated,
  TextDeprecated,
  VStack,
  AppLinkDeprecated,
  Text,
  AvatarDeprecated,
  Card,
  HStack,
} from '@/shared/ui';
import { Comment } from '../../model/types/comment';
import cls from './CommentCard.module.scss';
import { getRouteProfile } from '@/shared/const/router';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';

interface CommentCardProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentCard = memo(
  (props: PropsWithChildren<CommentCardProps>) => {
    const { className, comment, isLoading } = props;

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      off: () => SkeletonDeprecated,
      on: () => SkeletonRedesigned,
    });

    if (isLoading) {
      return (
        <VStack
          max
          className={classNames(cls.CommentCard, {}, [className])}
          data-testid="CommentCard.Loading"
        >
          <div className={cls.header}>
            <Skeleton
              width={30}
              height={30}
              border="50%"
            />
            <Skeleton
              width={100}
              height={16}
              className={cls.username}
            />
          </div>
          <Skeleton
            height={50}
            className={cls.text}
          />
        </VStack>
      );
    }

    if (!comment) {
      return null;
    }

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <VStack
            max
            className={classNames(cls.CommentCard, {}, [className])}
            data-testid="CommentCard.Content"
          >
            <AppLinkDeprecated to={getRouteProfile(comment.user.id)}>
              <div className={cls.header}>
                {comment.user.avatar && (
                  <AvatarDeprecated
                    size={30}
                    src={comment.user.avatar}
                  />
                )}
                <TextDeprecated title={comment.user.username} />
              </div>
            </AppLinkDeprecated>
            <TextDeprecated
              text={comment.text}
              className={cls.text}
            />
          </VStack>
        }
        on={
          <Card
            padding="24"
            max
            border="round"
          >
            <VStack
              max
              className={classNames(cls.CommentCardRedesigned, {}, [])}
              data-testid="CommentCard.Content"
            >
              <AppLink to={getRouteProfile(comment.user.id)}>
                <HStack gap="8">
                  {comment.user.avatar && (
                    <Avatar
                      size={30}
                      src={comment.user.avatar}
                    />
                  )}
                  <Text
                    title={comment.user.username}
                    bold
                  />
                </HStack>
              </AppLink>
              <Text text={comment.text} />
            </VStack>
          </Card>
        }
      />
    );
  },
);
