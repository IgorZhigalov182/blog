import cls from './ArticleImageBlockComponent.module.scss';
import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = (props: PropsWithChildren<ArticleImageBlockComponentProps>) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}></div>;
 )
}