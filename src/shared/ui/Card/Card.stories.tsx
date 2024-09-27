import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './Card';
import { Text } from '../Text/Text';

export default {
  title: 'shared/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <Text title="Title" text="Lorem test text for storybook cases" />,
};
