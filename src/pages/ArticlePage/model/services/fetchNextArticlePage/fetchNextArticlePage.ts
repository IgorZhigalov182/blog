import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import {
  getArticlePageHasMore,
  getArticlePageIsLoading,
  getArticlePageNum,
} from '../../selectors/articlePageSelectors';
import { articlePageActions } from '../../slice/articlePageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

interface FetchArticleListProps {
  page?: number;
}

export const fetchNextArticlePage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/fetchNextArticlePage',
  async (_, thunkApi) => {
    const { getState, dispatch } = thunkApi;

    const hasMore = getArticlePageHasMore(getState());
    const page = getArticlePageNum(getState());
    const isLoading = getArticlePageIsLoading(getState());

    if (hasMore && !isLoading) {
      dispatch(articlePageActions.setPage(page + 1));
      dispatch(fetchArticlesList({}));
    }
  },
);
