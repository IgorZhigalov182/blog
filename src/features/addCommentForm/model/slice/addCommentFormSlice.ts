import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';
import { addCommentForArticle } from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';

const initialState: AddCommentFormSchema = {
  text: '',
  error: undefined,
};

export const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(addCommentForArticle.pending, (state, action) => {
      // state.isLoading = true;
      state.error = undefined;
    });
    builder.addCase(addCommentForArticle.fulfilled, (state, action) => {
      // state.isLoading = false;
    });
    builder.addCase(addCommentForArticle.rejected, (state, action) => {
      // state.isLoading = false;
      state.error = action.payload as string;
    });
  },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
