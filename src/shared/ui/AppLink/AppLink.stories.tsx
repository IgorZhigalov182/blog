/* eslint-disable eol-last */
import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/'
    }
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Text'
    }
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'Text'
    },
};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'Text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};

export const Red: Story = {
    args: {
        theme: AppLinkTheme.RED,
        children: 'Text'
    },
};

export const RedDark: Story = {
    args: {
        theme: AppLinkTheme.RED,
        children: 'Text'
    },
    decorators: [ThemeDecorator(Theme.DARK)]
};