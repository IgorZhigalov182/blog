import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleSortField } from '../../model/types/article';
import { ArticleSortSelector } from './ArticleSortSelector';

export default {
  title: 'entities/article/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: ComponentStory<typeof ArticleSortSelector> = args => <ArticleSortSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  sort: ArticleSortField.CREATED,
  order: 'desc',
  onChangeOrder: action('onChangeOrder'),
  onChangeSort: action('onChangeSort'),
  // sort: ArticleSortField;
  // order: SortOrder;
  // onChangeOrder: (newOrder: SortOrder) => void;
  // onChangeSort: (newSort: ArticleSortField) => void;
};
