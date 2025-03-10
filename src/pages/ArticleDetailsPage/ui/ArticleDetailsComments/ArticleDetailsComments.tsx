import { useTranslation } from 'react-i18next';
import { memo, useCallback, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AddCommentForm } from '@/features/addCommentForm';
import { CommentList } from '@/entities/Comment';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { Loader, Text, TextDeprecated, TextSize, VStack } from '@/shared/ui';
import { useAppDispatch } from '@/shared/lib/hooks';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleDetailsCommentsProps {
  className?: string;
  id?: string;
}

export const ArticleDetailsComments = memo(
  (props: ArticleDetailsCommentsProps) => {
    const { className, id } = props;
    const { t } = useTranslation();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    const onSendComment = useCallback(
      (text: string) => {
        dispatch(addCommentForArticle(text));
      },
      [dispatch],
    );

    useInitialEffect(() => {
      dispatch(fetchCommentsByArticleId(id));
    });

    return (
      <VStack
        gap="16"
        max
        className={classNames('', {}, [className])}
      >
        <ToggleFeatures
          feature="isAppRedesigned"
          off={
            <TextDeprecated
              size={TextSize.L}
              title={t('Комментарии')}
            />
          }
          on={
            <Text
              size="l"
              title={t('Комментарии')}
            />
          }
        />
        <Suspense fallback={<Loader />}>
          <AddCommentForm onSendComment={onSendComment} />
        </Suspense>
        <CommentList
          isLoading={commentsIsLoading}
          comments={comments}
        />
      </VStack>
    );
  },
);
