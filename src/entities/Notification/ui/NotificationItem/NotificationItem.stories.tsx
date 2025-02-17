import { ComponentMeta, ComponentStory } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [],
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => (
  <NotificationItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  item: {
    userId: '2',
    href: 'https://',
    id: '1',
    title: 'Уведомление',
    description: 'Поставь лайк и оставь комментарий под Ulbi TV',
  },
};
Primary.parameters = {
  // mockData: [
  //   {
  //     url: `${__API__}/notifications`,
  //     method: 'GET',
  //     status: 200,
  //     response: [
  //       {
  //         userId: '2',
  //         href: 'https://',
  //         id: '1',
  //         title: 'Уведомление',
  //         description: 'Поставь лайк и оставь комментарий под Ulbi TV',
  //       },
  //     ],
  //   },
  // ],
};
