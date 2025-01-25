import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useDebounce } from '@/shared/lib/hooks';
import { articlePageActions } from '../../model/slice/articlePageSlice';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import {
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
  getArticlePageView,
} from '../../model/selectors/articlePageSelectors';
import { SortOrder } from '@/shared/types/SortOrder';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';

export function useArticleFilters() {
  const dispatch = useAppDispatch();
  const view = useSelector(getArticlePageView);
  const sort = useSelector(getArticlePageSort);
  const order = useSelector(getArticlePageOrder);
  const type = useSelector(getArticlePageType);
  const search = useSelector(getArticlePageSearch);

  const fetchData = useCallback(() => {
    dispatch(fetchArticlesList({ replace: true }));
  }, []);

  const debouncedFetchData = useDebounce(fetchData, 500);

  const onChangeView = useCallback(
    (newView: ArticleView) => {
      dispatch(articlePageActions.setView(newView));
    },
    [dispatch],
  );

  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlePageActions.setSort(newSort));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch],
  );

  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlePageActions.setOrder(newOrder));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch],
  );

  const onChangeSearch = useCallback(
    (e: string) => {
      dispatch(articlePageActions.setSearch(e));
      dispatch(articlePageActions.setPage(1));
      debouncedFetchData();
    },
    [dispatch],
  );

  const onChangeType = useCallback(
    (value: ArticleType) => {
      dispatch(articlePageActions.setType(value));
      dispatch(articlePageActions.setPage(1));
      fetchData();
    },
    [dispatch],
  );

  return {
    view,
    sort,
    order,
    type,
    search,
    onChangeView,
    onChangeSort,
    onChangeOrder,
    onChangeSearch,
    onChangeType,
  };
}
