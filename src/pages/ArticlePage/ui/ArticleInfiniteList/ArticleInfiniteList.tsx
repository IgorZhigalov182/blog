import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { memo, type PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui';
import {
  getArticlePageIsError,
  getArticlePageIsLoading,
  getArticlePageView,
} from '../../model/selectors/articlePageSelectors';
import { getArticles } from '../../model/slice/articlePageSlice';
import { ArticleList } from '@/entities/Article';

interface ArticleInfiniteListProps {
  className?: string;
}

export const ArticleInfiniteList = memo((props: PropsWithChildren<ArticleInfiniteListProps>) => {
  const { className } = props;
  const { t } = useTranslation();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView);

  const isError = useSelector(getArticlePageIsError);

  if (isError) {
    return (
      <Text text={t('Произошла ошибка при загрузке статей')} className={classNames('', {}, [className])} />
    );
  }

  return <ArticleList isLoading={isLoading} view={view} articles={articles} className={className} />;
});
