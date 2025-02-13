import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/redesigned/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Title',
  text: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
  title: 'Title',
  text: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'Text',
  variant: 'error',
};

export const Accent = Template.bind({});
Accent.args = {
  title: 'Title',
  text: 'Text',
  variant: 'accent',
};

export const SText = Template.bind({});
SText.args = {
  title: 'Title',
  text: 'Text',
  size: 's',
};

export const MText = Template.bind({});
MText.args = {
  title: 'Title',
  text: 'Text',
  size: 'm',
};

export const LText = Template.bind({});
LText.args = {
  title: 'Title',
  text: 'Text',
  size: 'l',
};

export const CenterAlign = Template.bind({});
CenterAlign.args = {
  title: 'Title',
  text: 'Text',
  align: 'center',
};

export const RightAlign = Template.bind({});
RightAlign.args = {
  title: 'Title',
  text: 'Text',
  align: 'right',
};
