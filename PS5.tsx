
import { classNames } from 'shared/lib/classNames/classNames';
import {  memo, PropsWithChildren } from 'react';
import cls from './Button.module.scss';

interface PS5Props {
    className?: string;
}

export const PS5 = memo((props: PropsWithChildren<ButtonProps>) => {
    const {
        className,
        children,
    } = props;

    return (
        <div
            className={classNames(cls.PS5, mods, [className])}
        >
            {children}
        </div>
    );
});
