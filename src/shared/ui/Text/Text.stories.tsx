import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextSize, TextTheme } from './Text';
import { title } from 'process';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

export default {
  title: 'shared/Text',
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = args => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Text',
  title: 'Title',
  text: 'Text',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'Text',
  title: 'Title',
  text: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  children: 'Text',
  title: 'Title',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  children: 'Text',
  title: 'Title',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'text',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'text',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
  title: 'Title',
  text: 'text',
  theme: TextTheme.ERROR,
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
  title: 'Title',
  text: 'text',
  theme: TextTheme.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const MTextSize = Template.bind({});
MTextSize.args = {
  title: 'Title m size',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto ad nihil quod a dolores dignissimos ullam',
  size: TextSize.M,
};

export const LTextSize = Template.bind({});
LTextSize.args = {
  title: 'Title l size',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto ad nihil quod a dolores dignissimos ullam',
  size: TextSize.L,
};
