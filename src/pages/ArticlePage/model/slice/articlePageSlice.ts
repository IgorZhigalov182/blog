import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ArticlePageSchema } from '../types/ArticlePageSchema';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: article => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  state => state.articlesPage || articlesAdapter.getInitialState()
);

export const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesAdapter.getInitialState<ArticlePageSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: (localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticleView) || ArticleView.GRID,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchArticlesList.pending, (state, action) => {
      state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
      state.isLoading = false;
      articlesAdapter.setAll(state, action.payload);
    });
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { reducer: articlePageReducer, actions: articlePageActions } = articlePageSlice;
