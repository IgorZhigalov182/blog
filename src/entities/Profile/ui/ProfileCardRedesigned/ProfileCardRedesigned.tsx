import { type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { CountrySelect } from '@/entities/Country';
import { CurrencySelect } from '@/entities/Currency';
import { HStack, VStack, Input, Avatar, Card, Text } from '@/shared/ui';
import { ProfileCardProps } from '../ProfileCard/ProfileCard';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton/Skeleton';

export const ProfileCardRedesignedSkeleton = () => {
  return (
    <Card
      padding="24"
      max
    >
      <VStack gap="32">
        <HStack
          max
          justify="center"
        >
          <Skeleton
            border="100%"
            width={128}
            height={128}
          />
        </HStack>
        <HStack
          gap="32"
          max
        >
          <VStack
            gap="32"
            max
          >
            <Skeleton
              width="100%"
              height={38}
            />
            <Skeleton
              width="100%"
              height={38}
            />
            <Skeleton
              width="100%"
              height={38}
            />
            <Skeleton
              width="100%"
              height={38}
            />
          </VStack>
          <VStack
            gap="32"
            max
          >
            <Skeleton
              width="100%"
              height={38}
            />
            <Skeleton
              width="100%"
              height={38}
            />
            <Skeleton
              width="100%"
              height={38}
            />
            <Skeleton
              width="100%"
              height={38}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};

export const ProfileCardRedesignedError = () => {
  const { t } = useTranslation();

  return (
    <HStack justify="center">
      <Text
        variant="error"
        title={t('Произошла ошибка при загрузке профиля')}
        text={t('Попробуйте обновить страницу')}
        align="center"
      />
    </HStack>
  );
};

export const ProfileCardRedesigned = (
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

  return (
    <Card
      max
      padding="24"
      className={className}
    >
      <VStack gap="32">
        {data?.avatar && (
          <HStack
            justify="center"
            max
          >
            <Avatar
              size={120}
              src={data?.avatar}
            />
          </HStack>
        )}
        <HStack
          gap="24"
          max
        >
          <VStack
            gap="16"
            max
          >
            <Input
              label={t('Имя')}
              value={data?.firstname}
              onChange={onChangeFirstname}
              readonly={readonly}
              data-testid="ProfileCard.firstname"
            />
            <Input
              label={t('Фамилия')}
              value={data?.lastname}
              onChange={onChangeLastname}
              readonly={readonly}
              data-testid="ProfileCard.lastname"
            />
            <Input
              label={t('Возраст')}
              value={data?.age}
              onChange={onChangeAge}
              readonly={readonly}
            />
            <Input
              label={t('Город')}
              value={data?.city}
              onChange={onChangeCity}
              readonly={readonly}
            />
          </VStack>
          <VStack
            gap="16"
            max
          >
            <Input
              label={t('Юзернейм')}
              value={data?.username}
              onChange={onChangeUsername}
              readonly={readonly}
            />
            <Input
              label={t('Ссылка на аватар')}
              value={data?.avatar}
              onChange={onChangeAvatar}
              readonly={readonly}
            />
            <CurrencySelect
              value={data?.currency}
              onChange={onChangeCurrency}
              readonly={readonly}
            />
            <CountrySelect
              value={data?.country}
              onChange={onChangeCountry}
              readonly={readonly}
            />
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};
