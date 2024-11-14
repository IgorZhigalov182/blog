import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { Article, ArticleType } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleRecommendationList } from './ArticleRecommendationList';

export default {
  title: 'features/articleRecommendationList/ArticleRecommendationList',
  component: ArticleRecommendationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [StoreDecorator({}), withMock],
} as ComponentMeta<typeof ArticleRecommendationList>;

const Template: ComponentStory<typeof ArticleRecommendationList> = () => <ArticleRecommendationList />;

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  user: {
    id: '1',
    username: 'admin',
    avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/Kotik-300x169.jpg',
  },
  blocks: [],
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [StoreDecorator({})];
Default.parameters = {
  mockData: [
    {
      url: `${__API__}/articles?_limit=3`,
      method: 'GET',
      status: 200,
      response: [
        { ...article, id: '1' },
        { ...article, id: '2' },
        { ...article, id: '3' },
      ],
    },
  ],
};
