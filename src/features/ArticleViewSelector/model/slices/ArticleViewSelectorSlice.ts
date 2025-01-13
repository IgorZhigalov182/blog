import { createSlice } from '@reduxjs/toolkit';
import { ArticleViewSelectorSchema } from '../types/ArticleViewSelectorSchema';

const initialState: ArticleViewSelectorSchema = {
  isLoading: false,
};

export const ArticleViewSelectorSlice = createSlice({
  name: 'ArticleViewSelector',
  initialState,
  reducers: {},
});

export const { actions: ArticleViewSelectorActions } = ArticleViewSelectorSlice;
export const { reducer: ArticleViewSelectorReducer } = ArticleViewSelectorSlice;

