import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: PropsWithChildren<ArticleDetailsPageProps>) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.articleDetailsPage, {}, [className])}>Article Detail Page</div>
    )
}

export default ArticleDetailsPage