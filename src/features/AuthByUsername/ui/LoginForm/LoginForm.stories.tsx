import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({ loginForm: { username: '123', password: '321' } }),
];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
  StoreDecorator({
    loginForm: { username: '123', password: '321', error: 'Error' },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];

export const PrimaryRedesigned = Template.bind({});
PrimaryRedesigned.args = {};
PrimaryRedesigned.decorators = [
  StoreDecorator({ loginForm: { username: '123', password: '321' } }),
  NewDesignDecorator,
];

export const WithErrorRedesigned = Template.bind({});
WithErrorRedesigned.args = {};
WithErrorRedesigned.decorators = [
  StoreDecorator({
    loginForm: { username: '123', password: '321', error: 'Error' },
  }),
  NewDesignDecorator,
];

export const LoadingRedesigned = Template.bind({});
LoadingRedesigned.args = {};
LoadingRedesigned.decorators = [
  StoreDecorator({ loginForm: { isLoading: true } }),
  NewDesignDecorator,
];
