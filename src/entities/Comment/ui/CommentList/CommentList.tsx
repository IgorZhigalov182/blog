import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TextDeprecated, VStack, Text } from '@/shared/ui';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo(
  (props: PropsWithChildren<CommentListProps>) => {
    const { className, isLoading, comments } = props;
    const { t } = useTranslation();

    if (isLoading) {
      return (
        <VStack
          max
          gap="16"
          className={classNames('', {}, [className])}
        >
          <CommentCard isLoading />
          <CommentCard isLoading />
          <CommentCard isLoading />
        </VStack>
      );
    }

    return (
      <VStack
        max
        gap="16"
        className={classNames('', {}, [className])}
      >
        {comments?.length ? (
          comments.map((comment) => (
            <CommentCard
              isLoading={isLoading}
              className={cls.CommentCard}
              comment={comment}
              key={comment.id}
            />
          ))
        ) : (
          <ToggleFeatures
            feature="isAppRedesigned"
            off={<TextDeprecated text={t('Комментариев нет')} />}
            on={<Text text={t('Комментариев нет')} />}
          />
        )}
      </VStack>
    );
  },
);
