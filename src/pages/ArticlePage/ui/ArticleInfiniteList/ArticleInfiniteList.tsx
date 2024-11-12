import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import cls from './ArticleInfiniteList.module.scss';
import { memo, useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slice/articlePageSlice';
import {
  getArticlePageIsError,
  getArticlePageIsLoading,
  getArticlePageView,
} from '../../model/selectors/articlePageSelectors';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSearchParams } from 'react-router-dom';
import { fetchNextArticlePage } from '../../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { Text } from '@/shared/ui/Text/Text';

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
      <Text text={t('Произошла ошибка при загрузке статей')} className={classNames(cls.ArticlePage, {}, [className])} />
    );
  }

  return <ArticleList isLoading={isLoading} view={view} articles={articles} className={className} />;
});
