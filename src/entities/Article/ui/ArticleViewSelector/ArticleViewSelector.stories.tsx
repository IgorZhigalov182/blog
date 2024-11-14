import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleView } from '../../model/contst/articleConsts';
import { ArticleViewSelector } from './ArticleViewSelector';

export default {
  title: 'entities/article/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  view: ArticleView.GRID,
  onViewClick: action('onViewClick'),
};
