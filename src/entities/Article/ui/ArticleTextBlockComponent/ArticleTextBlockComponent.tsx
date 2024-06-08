import cls from './ArticleTextBlockComponent.module.scss';
import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent = (props: PropsWithChildren<ArticleTextBlockComponentProps>) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleTextBlockComponent, {}, [className])}></div>;
 )
}
