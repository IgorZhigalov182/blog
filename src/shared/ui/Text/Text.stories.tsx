import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Text, TextSize, TextTheme } from './Text';

export default {
  title: 'shared/Text',
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

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  title: 'Title',
  text: 'Text',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
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

export const STextSize = Template.bind({});
STextSize.args = {
  title: 'Title m size',
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus architecto ad nihil quod a dolores dignissimos ullam',
  size: TextSize.S,
};

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
