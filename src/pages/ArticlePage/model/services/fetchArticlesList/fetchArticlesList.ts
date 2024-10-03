import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlePageLimit } from '../../selectors/articlePageSelectors';

interface FetchArticleListProps {
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticleListProps, ThunkConfig<string>>(
  'articlePage/fetchArticlesList',
  async (props, thunkApi) => {
    const { page = 1 } = props;
    const { extra, rejectWithValue, getState } = thunkApi;

    const limit = getArticlePageLimit(getState());

    try {
      const response = await extra.api.get<Article[]>(`/articles`, {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
        },
      });

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('Неверный логин или пароль');
    }
  }
);
