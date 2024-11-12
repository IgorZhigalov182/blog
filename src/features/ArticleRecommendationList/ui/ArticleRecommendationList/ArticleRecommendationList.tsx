import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { useGetArticleRecommendationListQuery } from '../../api/articleRecommendationsApi';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo((props: ArticleRecommendationListProps) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { data: articles, isLoading, error } = useGetArticleRecommendationListQuery(4);

  if (isLoading) {
    return <Text className={''} title={t('Загрузка рекоммендаций')} />;
  }

  if (error || !articles) {
    return <Text className={''} title={t('Не удалось загрузить рекоммендации')} />;
  }

  return (
    <VStack gap="8" className={classNames('', {}, [className])}>
      <Text className={''} title={t('Рекомендуем')} />
      <ArticleList target="_blank" className={''} articles={articles} />
    </VStack>
  );
});

