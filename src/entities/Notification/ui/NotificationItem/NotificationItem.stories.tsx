import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  // mockData: [
  //   {
  //     url: `${__API__}/notifications`,
  //     method: 'GET',
  //     status: 200,
  //     response: [
  //       {
  //         id: '1',
  //         title: 'Уведомление',
  //         description: 'Поставь лайк и оставь комментарий под Ulbi TV',
  //       },
  //     ],
  //   },
  // ],
};
