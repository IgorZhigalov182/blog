import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlePageInited } from '../../selectors/articlePageSelectors';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { SortOrder } from 'shared/types/SortOrder';
import { ArticleSortField, ArticleType } from 'entities/Article';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlePage/initArticlesPage',
  async (searchParams, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const isInited = getArticlePageInited(getState());

    if (!isInited) {
      const search = searchParams.get('search');
      const order = searchParams.get('order') as SortOrder;
      const sort = searchParams.get('sort') as ArticleSortField;
      const type = searchParams.get('type') as ArticleType;

      if (search) {
        dispatch(articlePageActions.setSearch(search));
      }

      if (order) {
        dispatch(articlePageActions.setOrder(order));
      }

      if (sort) {
        dispatch(articlePageActions.setSort(sort));
      }

      if (type) {
        dispatch(articlePageActions.setType(type));
      }

      dispatch(articlePageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  }
);
