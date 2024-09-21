import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Comment';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkApi) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkApi;

    const userId = getUserAuthData(getState())?.id;
    const articleId = getArticleDetailsData(getState())?.id;

    if (!userId || !text || !articleId) {
      rejectWithValue('Не удалось оставить комментарий');
    }

    try {
      const response = await extra.api.post<Comment>('/comments', {
        articleId,
        userId,
        text,
      });

      if (!response.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(articleId));

      return response.data;
    } catch (error) {
      return rejectWithValue('Не удалось оставить комментарий');
    }
  }
);
