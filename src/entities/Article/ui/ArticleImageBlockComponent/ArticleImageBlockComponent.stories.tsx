import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType } from '../../model/contst/articleConsts';
import { ArticleImageBlock } from '../../model/types/article';
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'entities/Article/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => (
  <ArticleImageBlockComponent {...args} />
);

const blockArgs: ArticleImageBlock = {
  id: '4',
  type: ArticleBlockType.IMAGE,
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT05PPqCw01NWo55HHSmbYpb4QCHm_dTxPAtg&s',
  title: 'Image title',
};

export const Normal = Template.bind({});
Normal.args = { block: blockArgs };

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = { block: blockArgs };
NormalRedesigned.decorators = [NewDesignDecorator];
