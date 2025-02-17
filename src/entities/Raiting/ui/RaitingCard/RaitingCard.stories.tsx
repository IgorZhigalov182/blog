import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RaitingCard } from './RaitingCard';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

export default {
  title: 'entities/Raiting/RaitingCard',
  component: RaitingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RaitingCard>;

const Template: ComponentStory<typeof RaitingCard> = () => <RaitingCard />;

export const Normal = Template.bind({});
Normal.args = {};

export const NormalRedesigned = Template.bind({});
NormalRedesigned.args = {};
NormalRedesigned.decorators = [NewDesignDecorator];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const DarkRedesigned = Template.bind({});
DarkRedesigned.args = {};
DarkRedesigned.decorators = [NewDesignDecorator, ThemeDecorator(Theme.DARK)];

export const NormalFill = Template.bind({});
NormalFill.args = { rate: 4 };

export const NormalFillRedesigned = Template.bind({});
NormalFillRedesigned.args = { rate: 3 };
NormalFillRedesigned.decorators = [NewDesignDecorator];

export const DarkFill = Template.bind({});
DarkFill.args = {};
DarkFill.decorators = [ThemeDecorator(Theme.DARK)];
