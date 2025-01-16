import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line
import { articleDetailsPageReducer } from '@/pages/ArticleDetailsPage/testing';
// eslint-disable-next-line
import { loginReducer } from '@/features/AuthByUsername/testing';
// eslint-disable-next-line
import { profileReducer } from '@/features/EditableProfileCard/testing';
// eslint-disable-next-line
import { articleDetailsReducer } from '@/entities/Article/testing';
// eslint-disable-next-line

const defaultAsyncReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetailsPage: articleDetailsPageReducer,
};

export const StoreDecorator =
  (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
  (StoryComponent: Story) =>
    (
      <StoreProvider
        initialState={initialState}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
