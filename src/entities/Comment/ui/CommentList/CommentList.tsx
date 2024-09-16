import { memo, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import { CommentCard } from '../CommentCard/CommentCard';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Comment } from '../../model/types/comment';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: PropsWithChildren<CommentListProps>) => {
  const { className, isLoading, comments } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map(comment => (
          <CommentCard isLoading={isLoading} className={cls.CommentCard} comment={comment} key={comment.id} />
        ))
      ) : (
        <Text text={t('Комментариев нет')} />
      )}
    </div>
  );
});
