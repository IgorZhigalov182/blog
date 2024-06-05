import { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlePage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticlePage = (props: PropsWithChildren<ArticleDetailsPageProps>) => {
    const { className } = props;

    return (
        <div className={classNames(cls.ArticlePage, {}, [className])}>
            'Article Page'
        </div>
    );
};

export default ArticlePage;