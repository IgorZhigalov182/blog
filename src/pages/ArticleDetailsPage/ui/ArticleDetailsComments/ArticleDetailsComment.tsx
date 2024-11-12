import { CommentList } from '@/entities/Comment';
import { AddCommentForm } from '@/features/addCommentForm';
import { memo, Suspense, useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { PageLoader } from '@/shared/ui/PageLoader/PageLoader';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentSlice';
import cls from './ArticleDetailsComment.module.scss';

interface ArticleDetailsCommentProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComment = memo((props: PropsWithChildren<ArticleDetailsCommentProps>) => {
  const { className, id } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  return (
    <VStack gap="16" max className={classNames(cls.ArticleDetailsComment, {}, [className])}>
      <Text className={cls.articleDetailsTitle} title={t('Комментарии')} />
      <Suspense fallback={<PageLoader />}>
        <AddCommentForm onSendComment={onSendComment} />
      </Suspense>
      <CommentList isLoading={isLoading} comments={comments} />
    </VStack>
  );
});
