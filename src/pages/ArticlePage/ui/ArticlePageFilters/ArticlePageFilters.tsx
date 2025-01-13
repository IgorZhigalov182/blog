import { memo, useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce';
import { SortOrder } from '@/shared/types/SortOrder';
import { Card, HStack, Input } from '@/shared/ui';
import {
  getArticlePageOrder,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView,
} from '../../model/selectors/articlePageSelectors';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import cls from './ArticlePageFilters.module.scss';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlePageActions } from '../../model/slice/articlePageSlice';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters = memo((props: PropsWithChildren<ArticlePageFiltersProps>) => {
  const { className } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlePageView);
  const sort = useSelector(getArticlePageSort);
  const order = useSelector(getArticlePageOrder);
  const type = useSelector(getArticlePageType);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, []);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (newView: ArticleView) => {
      dispatch(articlePageActions.setView(newView));
    },
    [dispatch]
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlePageActions.setSort(newSort));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch]
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlePageActions.setOrder(newOrder));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch]
  );

  const onChangeSearch = useCallback(
    (e: string) => {
      dispatch(articlePageActions.setSearch(e));
      dispatch(articlePageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch]
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlePageActions.setType(value));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch]
  );

  return (
    <div className={classNames('', {}, [className])}>
      <HStack justify="between">
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeSort={onChangeSort}
          onChangeOrder={onChangeOrder}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </HStack>
      <ArticleTypeTabs value={type} onChangeType={onChangeType} className={cls.tabs} />
      <Card className={cls.search}>
        <Input placeholder={t('Поиск')} onChange={onChangeSearch} />
      </Card>
    </div>
  );
});
