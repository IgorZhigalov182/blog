import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Tabs } from './Tabs';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/redesigned/Tabs',
  component: Tabs,
  argTypes: {},
  args: {},
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tabs: [
    { value: '1', content: 'Tab 1' },
    { value: '2', content: 'Tab 2' },
    { value: '3', content: 'Tab 3' },
  ],
  value: '1',
  onTabClick: action('onTabClick'),
};

export const Dark = Template.bind({});
Dark.args = {
  tabs: [
    { value: '1', content: 'Tab 1' },
    { value: '2', content: 'Tab 2' },
    { value: '3', content: 'Tab 3' },
  ],
  value: '1',
  onTabClick: action('onTabClick'),
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
