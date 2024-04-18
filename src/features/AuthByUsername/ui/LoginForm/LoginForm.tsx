import { memo, useCallback, type PropsWithChildren } from 'react';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { getLoginState } from 'features/AuthByUsername/model/selectors/getLoginState/getLoginState';
import { Input } from 'shared/ui/Input/Input';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo((props: PropsWithChildren<LoginFormProps>) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { username, password, isLoading, error } = useSelector(getLoginState);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Форма авторизации')} />
            {error &&
                <Text
                    text={t(`Неверный логин или пароль`)}
                    theme={TextTheme.ERROR}
                />}
            <Input
                onChange={onChangeUsername}
                value={username}
                placeholder={t('Введите username')}
                className={cls.input}
                autoFocus
            />
            <Input
                onChange={onChangePassword}
                value={password}
                placeholder={t('Введите пароль')}
                className={cls.input}
            />
            <Button
                onClick={onLoginClick}
                theme={ThemeButton.OUTLINE}
                className={classNames(cls.btnEnter)}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
