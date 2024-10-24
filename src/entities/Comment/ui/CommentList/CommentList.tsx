import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentCard } from '../CommentCard/CommentCard';
import cls from './CommentList.module.scss';
import { HStack, VStack } from 'shared/ui/Stack';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: PropsWithChildren<CommentListProps>) => {
  const { className, isLoading, comments } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <VStack gap="8" className={classNames('', {}, [className])}>
        <CommentCard isLoading />
        <CommentCard isLoading />
        <CommentCard isLoading />
      </VStack>
    );
  }

  return (
    <VStack max className={classNames('', {}, [className])}>
      {comments?.length ? (
        comments.map(comment => (
          <CommentCard isLoading={isLoading} className={cls.CommentCard} comment={comment} key={comment.id} />
        ))
      ) : (
        <Text text={t('Комментариев нет')} />
      )}
    </VStack>
  );
});
