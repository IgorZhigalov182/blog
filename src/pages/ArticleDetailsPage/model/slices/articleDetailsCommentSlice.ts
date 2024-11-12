import { createEntityAdapter, createSlice, EntityState, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Comment } from '@/entities/Comment';
import { ArticleDetailsCommentsSchema } from '../types/ArticleDetailsCommentsSchema';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: comment => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  state => state.articleDetailsComments || commentsAdapter.getInitialState()
);

export const articleDetailsCommentsSlice = createSlice({
  name: 'articleDetailsCommentsSlice',
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCommentsByArticleId.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchCommentsByArticleId.fulfilled, (state, action: PayloadAction<Comment[]>) => {
      state.isLoading = false;
      commentsAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { reducer: articleDetailsCommentsReducer } = articleDetailsCommentsSlice;
