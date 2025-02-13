import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card } from './Card';
import { Text } from '../Text/Text';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'shared/redesigned/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div style={{ margin: '50px' }}>
    <Card {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <Text
      title="Title"
      text="Lorem test text for storybook cases"
    />
  ),
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: (
    <Text
      title="Title"
      text="Lorem test text for storybook cases"
    />
  ),
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
