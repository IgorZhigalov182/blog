import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Button } from './Button';
import { Icon } from '../Icon/Icon';
import Avatar from '@/shared/assets/icons/avatar.svg';

export default {
  title: 'shared/redesigned/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: <span>Button</span>,
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <div style={{ padding: '50px' }}>
    <Button {...args} />
  </div>
);

export const Clear = Template.bind({});
Clear.args = {
  variant: 'clear',
};

export const ClearDark = Template.bind({});
ClearDark.args = {
  variant: 'clear',
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  variant: 'outline',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Fill = Template.bind({});
Fill.args = {
  variant: 'fill',
};

export const FillDark = Template.bind({});
FillDark.args = {
  variant: 'fill',
};
FillDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineSuccess = Template.bind({});
OutlineSuccess.args = {
  variant: 'outline',
  color: 'success',
};

export const OutlineSuccessDark = Template.bind({});
OutlineSuccessDark.args = {
  variant: 'outline',
  color: 'success',
};
OutlineSuccessDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineError = Template.bind({});
OutlineError.args = {
  variant: 'outline',
  color: 'error',
};

export const OutlineErrorDark = Template.bind({});
OutlineErrorDark.args = {
  variant: 'outline',
  color: 'error',
};
OutlineErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const MSize = Template.bind({});
MSize.args = {
  variant: 'fill',
  size: 'm',
};
MSize.decorators = [ThemeDecorator(Theme.DARK)];

export const LSize = Template.bind({});
LSize.args = {
  variant: 'fill',
  size: 'l',
};
LSize.decorators = [ThemeDecorator(Theme.DARK)];

export const XLSize = Template.bind({});
XLSize.args = {
  variant: 'fill',
  size: 'xl',
};
XLSize.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
  variant: 'fill',
  square: true,
  size: 'xl',
};
Square.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'fill',
  disabled: true,
};
Disabled.decorators = [ThemeDecorator(Theme.DARK)];

export const MaxWidth = Template.bind({});
MaxWidth.args = {
  variant: 'fill',
  maxWidth: true,
};
MaxWidth.decorators = [ThemeDecorator(Theme.DARK)];

export const AddonLeft = Template.bind({});
AddonLeft.args = {
  variant: 'fill',
  addonLeft: <Icon Svg={Avatar} />,
};
AddonLeft.decorators = [ThemeDecorator(Theme.DARK)];

export const AddonRight = Template.bind({});
AddonRight.args = {
  variant: 'fill',
  addonRight: <Icon Svg={Avatar} />,
};
AddonRight.decorators = [ThemeDecorator(Theme.DARK)];
