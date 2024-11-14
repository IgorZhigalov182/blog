import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import ArticleRaiting from './ArticleRaiting';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/ArticleRaiting',
  component: ArticleRaiting,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    StoreDecorator({
      user: {
        authData: { id: '1' },
      },
    }),
    withMock,
  ],
} as ComponentMeta<typeof ArticleRaiting>;

const Template: ComponentStory<typeof ArticleRaiting> = (args) => <ArticleRaiting {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  articleId: '1',
};
Normal.parameters = {
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};
Normal.decorators = [];

export const WithoutRate = Template.bind({});
WithoutRate.args = {};
WithoutRate.decorators = [ThemeDecorator(Theme.DARK)];
