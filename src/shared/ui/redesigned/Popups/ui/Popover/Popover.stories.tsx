import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../../../Button/Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/redesigned/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '150px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: <div>Some text</div>,
  trigger: <Button>Open</Button>,
};

export const Dark = Template.bind({});
Dark.args = {
  children: <div>Some text</div>,
  trigger: <Button>Open</Button>,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
