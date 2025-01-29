import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetArticleRecommendationListQuery } from '../../api/articleRecommendationsApi';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack, TextDeprecated, Text, TextSize } from '@/shared/ui';
import { ArticleList } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleRecommendationListProps {
  className?: string;
}

export const ArticleRecommendationList = memo(
  (props: ArticleRecommendationListProps) => {
    const { className } = props;
    const { t } = useTranslation('article');
    const {
      data: articles,
      isLoading,
      error,
    } = useGetArticleRecommendationListQuery(4);

    if (isLoading) {
      return (
        <TextDeprecated
          className=""
          title={t('Загрузка рекоммендаций')}
        />
      );
    }

    if (error || !articles) {
      return (
        <TextDeprecated
          className=""
          title={t('Не удалось загрузить рекоммендации')}
        />
      );
    }

    return (
      <VStack
        gap="8"
        className={classNames('', {}, [className])}
        data-testid="ArticleRecommendationList"
      >
        <ToggleFeatures
          feature="isAppRedesigned"
          off={
            <TextDeprecated
              size={TextSize.L}
              className=""
              title={t('Рекомендуем')}
            />
          }
          on={
            <Text
              size="l"
              className=""
              title={t('Рекомендуем')}
            />
          }
        />

        <ArticleList
          target="_blank"
          className=""
          articles={articles}
        />
      </VStack>
    );
  },
);
