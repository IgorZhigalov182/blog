import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleViewSelector } from './ArticleViewSelector';
import { ArticleView } from '@/entities/Article';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'features/ArticleViewSelector',
  component: ArticleViewSelector,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => (
  <ArticleViewSelector {...args} />
);

export const NormalGrid = Template.bind({});
NormalGrid.args = {
  view: ArticleView.GRID,
  onViewClick: action('onViewClick'),
};

export const NormalRedesignedGrid = Template.bind({});
NormalRedesignedGrid.args = {
  view: ArticleView.GRID,
  onViewClick: action('onViewClick'),
};
NormalRedesignedGrid.decorators = [NewDesignDecorator];
