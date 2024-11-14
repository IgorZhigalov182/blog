import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import {
  getArticlePageLimit,
  getArticlePageNum,
  getArticlePageOrder,
  getArticlePageSearch,
  getArticlePageSort,
  getArticlePageType,
} from '../../selectors/articlePageSelectors';
import { addQueryParams } from '@/shared/lib/url/addQueryParams/addQueryParams';

interface FetchArticleListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
  'articlePage/fetchArticlesList',
  async (props, thunkApi) => {
    const { extra, rejectWithValue, getState } = thunkApi;

    const limit = getArticlePageLimit(getState());
    const sort = getArticlePageSort(getState());
    const order = getArticlePageOrder(getState());
    const search = getArticlePageSearch(getState());
    const page = getArticlePageNum(getState());
    const type = getArticlePageType(getState());

    try {
      addQueryParams({
        sort,
        order,
        search,
        type,
      });
      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('Неверный логин или пароль');
    }
  },
);
