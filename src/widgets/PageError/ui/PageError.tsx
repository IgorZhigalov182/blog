import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';
import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';

interface PageErrorProps {
    className?: string;
}

export const PageError = (props: PropsWithChildren<PageErrorProps>) => {
    const { className } = props;
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            {t('Произошла ошибка')}
            <Button onClick={() => window.location.reload()}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}