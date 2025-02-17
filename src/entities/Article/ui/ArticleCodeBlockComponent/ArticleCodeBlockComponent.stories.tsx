import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArticleBlockType } from '../../model/contst/articleConsts';
import { ArticleCodeBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'entities/Article/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => (
  <ArticleCodeBlockComponent {...args} />
);

const blockArgs: ArticleCodeBlock = {
  id: '4',
  type: ArticleBlockType.CODE,
  code: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n\n    <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
};

export const Normal = Template.bind({});
Normal.args = { block: blockArgs };

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = { block: blockArgs };
NormalRedesigned.decorators = [NewDesignDecorator];
