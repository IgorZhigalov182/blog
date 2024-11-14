import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { RaitingCard } from '@/entities/Raiting';
import { useGetArticleRaitingQuery, useRateArticleMutation } from '../../model/api/articleRaitingApi';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRaitingProps {
  className?: string;
  articleId: string;
}

const ArticleRaiting = memo((props: ArticleRaitingProps) => {
  const { className, articleId } = props;
  const userId = useSelector(getUserAuthData)?.id;
  const { t } = useTranslation();
  const { data, isLoading } = useGetArticleRaitingQuery({ userId: userId ?? '', articleId });
  const [postRate] = useRateArticleMutation();
  const rating = data?.[0];

  const handleRateArticle = useCallback(
    (starsCount: number, feedback?: string) => {
      try {
        postRate({
          userId: userId ?? '',
          articleId,
          rate: starsCount,
          feedback,
        });
      } catch (error) {
        console.error(error);
      }
    },
    [articleId, postRate, userId],
  );

  const onAccept = useCallback(
    (starsCount: number, feedback?: string) => {
      handleRateArticle(starsCount, feedback);
    },
    [handleRateArticle],
  );

  const onCancel = useCallback(
    (starsCount: number) => {
      handleRateArticle(starsCount);
    },
    [handleRateArticle],
  );

  if (isLoading) {
    return <Skeleton height={120} width="100%" />;
  }

  return (
    <RaitingCard
      onCancel={onCancel}
      onAccept={onAccept}
      rate={rating?.rate}
      hasFeedback
      title={t('Оцените статью')}
      feedbackTitle={t('Оставьте отзыв')}
      className={className}
    />
  );
});

export default ArticleRaiting;
