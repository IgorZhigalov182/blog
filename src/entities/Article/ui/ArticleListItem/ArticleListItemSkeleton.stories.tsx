import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleListItemSkeleton } from './ArticleListItemSkeleton';
import { ArticleView } from '../../model/contst/articleConsts';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'entities/Article/ArticleListItem/ArticleListItemSkeleton',
  component: ArticleListItemSkeleton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleListItemSkeleton>;

const Template: ComponentStory<typeof ArticleListItemSkeleton> = (args) => (
  <ArticleListItemSkeleton {...args} />
);

export const ArticleListItemSkeletonGrid = Template.bind({});
ArticleListItemSkeletonGrid.args = {
  view: ArticleView.GRID,
};

export const ArticleListItemSkeletonList = Template.bind({});
ArticleListItemSkeletonList.args = {
  view: ArticleView.LIST,
};

export const ArticleListItemSkeletonGridRedesigned = Template.bind({});
ArticleListItemSkeletonGridRedesigned.args = {
  view: ArticleView.GRID,
};
ArticleListItemSkeletonGridRedesigned.decorators = [NewDesignDecorator];

export const ArticleListItemSkeletonListdRedesigned = Template.bind({});
ArticleListItemSkeletonListdRedesigned.args = {
  view: ArticleView.LIST,
};
ArticleListItemSkeletonListdRedesigned.decorators = [NewDesignDecorator];
