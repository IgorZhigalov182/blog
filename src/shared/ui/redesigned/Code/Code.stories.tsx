import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Code } from './Code';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'shared/redesigned/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: `Lorem ipsum dolor sit amet
     consectetur adipisicing elit. Doloribus quod libero 
     minus facilis, omnis corporis molestias rem esse voluptas op
     tio assumenda repellat recusandae veritatis labore acc
     usamus deserunt debitis incidunt tempore?`,
};

export const Dark = Template.bind({});
Dark.args = {
  text: `Lorem ipsum dolor sit amet
     consectetur adipisicing elit. Doloribus quod libero 
     minus facilis, omnis corporis molestias rem esse voluptas op
     tio assumenda repellat recusandae veritatis labore acc
     usamus deserunt debitis incidunt tempore?`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
