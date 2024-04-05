import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal, ButtonSize, ThemeButton } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet c
    onsectetur adipisicing elit
    .Fugiat cum adipisci natus,
    tenetur maxime harum amet deserunt, veniam numquam la
    boriosam quam.Consequatur quo corrupti eum reprehenderit
    vel modi voluptatem maiores.`,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet c
    onsectetur adipisicing elit
    .Fugiat cum adipisci natus,
    tenetur maxime harum amet deserunt, veniam numquam la
    boriosam quam.Consequatur quo corrupti eum reprehenderit
    vel modi voluptatem maiores.`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]