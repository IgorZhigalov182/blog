import { type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import {
  AvatarDeprecated,
  InputDeprecated,
  Loader,
  HStack,
  VStack,
  TextDeprecated,
  TextAlign,
  TextTheme,
} from '@/shared/ui';

import cls from './ProfileCardDeprecated.module.scss';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';

export const ProfileCardDeprecatedSkeleton = () => {
  return (
    <HStack
      justify="center"
      max
      className={classNames(cls.profileCard, {}, [cls.loading])}
    >
      <Loader />
    </HStack>
  );
};

export const ProfileCardDeprecatedError = () => {
  const { t } = useTranslation();

  return (
    <HStack
      justify="center"
      className={classNames(cls.profileCard, {}, [cls.error])}
    >
      <TextDeprecated
        theme={TextTheme.ERROR}
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Попробуйте обновить страницу')}
        align={TextAlign.CENTER}
      />
    </HStack>
  );
};

export const ProfileCardDeprecated = (
  props: PropsWithChildren<ProfileCardProps>,
) => {
  const {
    className,
    data,
    readonly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeUsername,
    onChangeAvatar,
    onChangeCurrency,
    onChangeCountry,
  } = props;

  const { t } = useTranslation('profile');

  const mods: Mods = {
    [cls.editing]: !readonly,
  };

  return (
    <VStack
      max
      gap="16"
      className={classNames(cls.profileCard, mods, [className])}
    >
      {data?.avatar && (
        <HStack
          justify="center"
          max
        >
          <AvatarDeprecated src={data?.avatar} />
        </HStack>
      )}
      <InputDeprecated
        value={data?.firstname}
        placeholder={t('Введите ваше имя')}
        className={cls.input}
        onChange={onChangeFirstname}
        readonly={readonly}
        data-testid="ProfileCard.firstname"
      />
      <InputDeprecated
        value={data?.lastname}
        placeholder={t('Введите вашу фамилию')}
        className={cls.input}
        onChange={onChangeLastname}
        readonly={readonly}
        data-testid="ProfileCard.lastname"
      />
      <InputDeprecated
        value={data?.age}
        placeholder={t('Введите ваш возраст')}
        className={cls.input}
        onChange={onChangeAge}
        readonly={readonly}
      />
      <InputDeprecated
        value={data?.city}
        placeholder={t('Введите ваш город')}
        className={cls.input}
        onChange={onChangeCity}
        readonly={readonly}
      />
      <InputDeprecated
        value={data?.username}
        placeholder={t('Введите ваш юзернейм')}
        className={cls.input}
        onChange={onChangeUsername}
        readonly={readonly}
      />
      <InputDeprecated
        value={data?.avatar}
        placeholder={t('Введите ссылку на аватар')}
        className={cls.input}
        onChange={onChangeAvatar}
        readonly={readonly}
      />
      <CurrencySelect
        className={cls.input}
        value={data?.currency}
        onChange={onChangeCurrency}
        readonly={readonly}
      />
      <CountrySelect
        className={cls.input}
        value={data?.country}
        onChange={onChangeCountry}
        readonly={readonly}
      />
    </VStack>
  );
};
