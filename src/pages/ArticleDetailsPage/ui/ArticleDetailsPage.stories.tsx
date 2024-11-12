import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'pages/ArticleDetailsPage',
  component: ArticleDetailsPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = args => <ArticleDetailsPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
