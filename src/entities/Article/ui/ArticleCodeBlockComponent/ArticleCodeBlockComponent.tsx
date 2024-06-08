import cls from './ArticleCodeBlockComponent.module.scss';
import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = (props: PropsWithChildren<ArticleCodeBlockComponentProps>) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])}></div>;
 )
}