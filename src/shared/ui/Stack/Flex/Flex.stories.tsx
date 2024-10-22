import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = args => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>center</div>
      <div>center</div>
      <div>center</div>
      <div>center</div>
    </>
  ),
  align: 'center',
};

export const Column = Template.bind({});
Column.args = {
  children: (
    <>
      <div>center</div>
      <div>center</div>
      <div>center</div>
      <div>center</div>
    </>
  ),
  direction: 'column',
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  children: (
    <>
      <div>center</div>
      <div>center</div>
      <div>center</div>
      <div>center</div>
    </>
  ),
  gap: '4',
};

export const ColumnGap4 = Template.bind({});
ColumnGap4.args = {
  children: (
    <>
      <div>center</div>
      <div>center</div>
      <div>center</div>
      <div>center</div>
    </>
  ),
  gap: '4',
  direction: 'column',
};
