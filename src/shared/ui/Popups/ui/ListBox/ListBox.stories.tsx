import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
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
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox defaultValue="Арбуз" {...args} />;

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
  onChange: () => null,
  items: [
    { content: 'Арбуз', value: 'Арбуз' },
    { content: 'Банан', value: 'Банан' },
    { content: 'Вишня', value: 'Вишня' },
  ],
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
  onChange: () => null,
  items: [
    { content: 'Арбуз', value: 'Арбуз' },
    { content: 'Банан', value: 'Банан' },
    { content: 'Вишня', value: 'Вишня' },
  ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left',
  onChange: () => null,
  items: [
    { content: 'Арбуз', value: 'Арбуз' },
    { content: 'Банан', value: 'Банан' },
    { content: 'Вишня', value: 'Вишня' },
  ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
  onChange: () => null,
  items: [
    { content: 'Арбуз', value: 'Арбуз' },
    { content: 'Банан', value: 'Банан' },
    { content: 'Вишня', value: 'Вишня' },
  ],
};
