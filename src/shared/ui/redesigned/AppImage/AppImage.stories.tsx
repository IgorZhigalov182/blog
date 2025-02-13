import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { AppImage } from './AppImage';

export default {
  title: 'shared/redesigned/AppImage',
  component: AppImage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    width: 300,
    height: 200,
    src: 'https://www.edsullivan.com/files/2020/10/JOHNNYCASH_ED-914x670.png',
  },
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => (
  <AppImage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const withFallback = Template.bind({});
withFallback.args = {
  fallback: <>Loading...</>,
};

export const errorFallback = Template.bind({});
errorFallback.args = {
  src: '',
  errorFallback: <>Failed to load...</>,
};
