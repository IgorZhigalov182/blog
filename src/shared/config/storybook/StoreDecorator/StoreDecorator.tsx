import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer } from '@/pages/ArticleDetailsPage/testing';
import { loginReducer } from '@/features/AuthByUsername/testing';
import { profileReducer } from '@/features/EditableProfileCard/testing';
import { articleDetailsReducer } from '@/entities/Article/testing';

const defaultAsyncReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetailsComments: articleDetailsCommentsReducer,
};

export const StoreDecorator =
  (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={initialState}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
