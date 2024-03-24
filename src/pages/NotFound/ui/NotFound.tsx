import { useTranslation } from 'react-i18next';
import type { PropsWithChildren } from 'react';
import cls from './NotFound.module.scss';

interface NotFoundProps {
    className?: string;
}

export const NotFound = (props: PropsWithChildren<NotFoundProps>) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={cls.notFound}>{t('Страница не найдена')}</div>
    );
};
