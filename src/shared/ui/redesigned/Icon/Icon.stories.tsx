import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon } from './Icon';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import ProfileIcon from '@/shared/assets/icons/avatar.svg';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/redesigned/Icon',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  Svg: ProfileIcon,
};

export const Dark = Template.bind({});
Dark.args = {
  Svg: ProfileIcon,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
