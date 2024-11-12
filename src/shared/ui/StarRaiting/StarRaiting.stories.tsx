import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StarRaiting } from './StarRaiting';

export default {
  title: 'shared/StarRaiting',
  component: StarRaiting,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof StarRaiting>;

const Template: ComponentStory<typeof StarRaiting> = args => <StarRaiting {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
