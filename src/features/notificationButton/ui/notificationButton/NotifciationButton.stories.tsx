import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotifciationButton } from './NotifciationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'features/NotifciationButton',
  component: NotifciationButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotifciationButton>;

const Template: ComponentStory<typeof NotifciationButton> = (args) => <NotifciationButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
