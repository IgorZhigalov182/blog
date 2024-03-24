/* eslint-disable eol-last */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { NotFound } from './NotFound';

const meta: Meta<typeof NotFound> = {
    title: 'pages/NotFound',
    component: NotFound,
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Light: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Dark: Story = {
};