import { Story } from '@storybook/react';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { articleDetailsReducer } from '@/entities/Article/model/slice/articleDetailsSlice';
import { loginReducer } from '@/features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from '@/features/EditableProfileCard/model/slice/ProfileSlice';
import { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
  articleDetails: articleDetailsReducer,
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator =
  (initialState: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) =>
    (
      <StoreProvider initialState={initialState} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
      </StoreProvider>
    );
