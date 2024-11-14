import { ComponentMeta, ComponentStory } from '@storybook/react';
import withMock from 'storybook-addon-mock';
import { method } from 'lodash';
import { response } from 'express';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { NotificationList } from './NotificationList';

export default {
  title: 'entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
  decorators: [StoreDecorator({}), withMock],
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Уведомление',
          description: 'Поставь лайк и оставь комментарий под Ulbi TV',
        },
        {
          id: '2',
          title: 'Уведомление',
          description: 'Поставь лайк и оставь комментарий под Ulbi TV',
        },
        {
          id: '3',
          title: 'Уведомление',
          description: 'Поставь лайк и оставь комментарий под Ulbi TV',
        },
      ],
    },
  ],
};
