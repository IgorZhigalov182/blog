import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = (props: PropsWithChildren<LoginFormProps>) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input autoFocus placeholder={t('Введите username')} className={cls.input} />
            <Input placeholder={t('Введите пароль')} className={cls.input} />
            <Button className={classNames(cls.btnEnter)}>
                {t('Войти')}
            </Button>
        </div>
    )
}