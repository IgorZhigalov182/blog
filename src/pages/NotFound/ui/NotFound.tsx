import { useTranslation } from 'react-i18next';
import cls from './NotFound.module.scss';

import type { PropsWithChildren } from 'react';

interface NotFoundProps {
    className?: string;
}

export const NotFound = (props: PropsWithChildren<NotFoundProps>) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <div className={cls.notFound}>{t('Страница не найдена')}</div>
    )
}