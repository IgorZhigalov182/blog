import { memo, useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  TextDeprecated,
  TextTheme,
  Button,
  ThemeButton,
  Input,
  InputDeprecated,
  ButtonDeprecated,
  Text,
  VStack,
} from '@/shared/ui';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import cls from './LoginForm.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { useForceUpdate } from '@/shared/lib/render/forceUpdate';

export interface LoginFormProps {
  className?: string;
  onSuccess: () => void;
}

const initialReducers: ReducersList = {
  loginForm: loginReducer,
};

const LoginForm = memo((props: PropsWithChildren<LoginFormProps>) => {
  const { className, onSuccess } = props;
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const username = useSelector(getLoginUsername);
  const password = useSelector(getLoginPassword);
  const isLoading = useSelector(getLoginIsLoading);
  const error = useSelector(getLoginError);
  const forceUpdate = useForceUpdate();

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch],
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch],
  );

  const onLoginClick = useCallback(async () => {
    const result = await dispatch(loginByUsername({ username, password }));

    if (result?.meta?.requestStatus === 'fulfilled') {
      onSuccess();
      forceUpdate();
    }
  }, [forceUpdate, onSuccess, dispatch, password, username]);

  return (
    <DynamicModuleLoader
      removeAfterUnmount
      reducers={initialReducers}
    >
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <div className={classNames(cls.loginForm, {}, [className])}>
            <TextDeprecated title={t('Форма авторизации')} />
            {error && (
              <TextDeprecated
                text={t('Неверный логин или пароль')}
                theme={TextTheme.ERROR}
              />
            )}
            <InputDeprecated
              onChange={onChangeUsername}
              value={username}
              placeholder={t('Введите username')}
              className={cls.input}
              autoFocus
            />
            <InputDeprecated
              onChange={onChangePassword}
              value={password}
              placeholder={t('Введите пароль')}
              className={cls.input}
            />
            <ButtonDeprecated
              onClick={onLoginClick}
              theme={ThemeButton.OUTLINE}
              className={classNames(cls.btnEnter)}
              disabled={isLoading}
            >
              {t('Войти')}
            </ButtonDeprecated>
          </div>
        }
        on={
          <VStack
            gap="8"
            className={classNames(cls.loginForm, {}, [className])}
          >
            <Text title={t('Форма авторизации')} />
            {error && (
              <Text
                text={t('Неверный логин или пароль')}
                variant="error"
              />
            )}
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
              variant="outline"
              className={classNames(cls.btnEnter)}
              disabled={isLoading}
            >
              {t('Войти')}
            </Button>
          </VStack>
        }
      />
    </DynamicModuleLoader>
  );
});

export default LoginForm;
