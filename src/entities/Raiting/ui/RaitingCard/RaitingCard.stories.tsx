import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { RaitingCard } from './RaitingCard';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'entities/RaitingCard',
  component: RaitingCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof RaitingCard>;

const Template: ComponentStory<typeof RaitingCard> = () => <RaitingCard />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Пожалуйста оцените',
  feedbackTitle: 'Спасибо за оценку',
};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const NormalFill = Template.bind({});
Normal.args = {};

export const DarkFill = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

// title?: string;
// feedbackTitle?: string;
// hasFeedback?: boolean;
// onCancel?: (starsCount: number) => void;
// onAccept?: (starsCount: number, feedback?: string) => void;
// rate?: number;

