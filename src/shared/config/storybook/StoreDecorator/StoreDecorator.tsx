import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line
import { articleDetailsCommentsReducer } from '@/pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice';
// eslint-disable-next-line
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
// eslint-disable-next-line
import { profileReducer } from '@/features/EditableProfileCard/model/slice/ProfileSlice';
// eslint-disable-next-line
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';

const defaultAsyncReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator =
  (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
