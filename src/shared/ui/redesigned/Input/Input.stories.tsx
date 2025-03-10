import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/redesigned/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Enter your text',
  value: 'Text',
};

export const Dark = Template.bind({});
Dark.args = {
  placeholder: 'Enter your text',
  value: 'Text',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Enter your text',
};
