import { AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from '@/entities/Article/model/types/article';
import { UserSchema } from '@/entities/User';
import { AddCommentFormSchema } from '@/features/addCommentForm';
import { LoginSchema } from '@/features/AuthByUsername';
import { ProfileSchema } from '@/features/EditableProfileCard';
import { ScrollSaveSchema } from '@/features/scrollSave';
import { ArticleDetailsCommentsSchema } from '@/pages/ArticleDetailsPage';
import { ArticleDetailsRecommedationsSchema } from '@/pages/ArticleDetailsPage/model/types/ArticleDetailsRecommedationsSchema';
import { ArticlePageSchema } from '@/pages/ArticlePage/model/types/ArticlePageSchema';
import { NavigateOptions, To } from 'react-router-dom';
import { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  user: UserSchema;
  scroll: ScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async reducers
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsComments?: ArticleDetailsCommentsSchema;
  articleDetailsRecommedations?: ArticleDetailsRecommedationsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlePageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
  getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
