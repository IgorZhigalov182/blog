import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSortSelector } from './ArticleSortSelector';
import { ArticleSortField } from '../../../../entities/Article/model/contst/articleConsts';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'features/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = (args) => (
  <ArticleSortSelector {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  sort: ArticleSortField.CREATED,
  order: 'desc',
  onChangeOrder: action('onChangeOrder'),
  onChangeSort: action('onChangeSort'),
};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {
  sort: ArticleSortField.CREATED,
  order: 'desc',
  onChangeOrder: action('onChangeOrder'),
  onChangeSort: action('onChangeSort'),
};
NormalRedesigned.decorators = [NewDesignDecorator];
