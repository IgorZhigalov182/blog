import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button/Button';

export default {
  title: 'shared/Dropdown',
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />;

export const HDropdown = Template.bind({});
HDropdown.args = {
  trigger: <Button>Open</Button>,
  items: [{ content: '1' }, { content: '2' }, { content: '3' }, { content: '4' }],
};
