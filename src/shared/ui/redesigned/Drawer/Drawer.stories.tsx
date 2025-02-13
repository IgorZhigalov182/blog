import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Drawer } from './Drawer';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Text } from '../Text/Text';
import { Card } from '../Card/Card';

export default {
  title: 'shared/redesigned/Drawer',
  component: Drawer,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: (
    <Card>
      <Text
        title="Title okko"
        text="Lorem ipsum"
      />
    </Card>
  ),
};
