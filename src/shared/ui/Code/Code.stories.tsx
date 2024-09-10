import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = args => <Code {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: `Lorem ipsum dolor sit amet
     consectetur adipisicing elit. Doloribus quod libero 
     minus facilis, omnis corporis molestias rem esse voluptas op
     tio assumenda repellat recusandae veritatis labore acc
     usamus deserunt debitis incidunt tempore?`,
};
