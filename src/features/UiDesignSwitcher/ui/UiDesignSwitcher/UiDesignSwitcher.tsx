import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { HStack, ListBox, Skeleton, Text } from '@/shared/ui';
import { getFeatureFlag, updateFeatureFlag } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks';
import { getUserAuthData } from '@/entities/User';

export const UiDesignSwitcher = memo(() => {
  const { t } = useTranslation();
  const isAppRedesigned = getFeatureFlag('isAppRedesigned');
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const [isLoading, setIsLoading] = useState(false);

  const items = [
    {
      value: 'new',
      content: t('Новый'),
    },
    {
      value: 'old',
      content: t('Старый'),
    },
  ];

  const onChange = async (value: string) => {
    setIsLoading(true);

    if (authData) {
      await dispatch(
        updateFeatureFlag({
          userId: authData?.id,
          newFeatures: {
            isAppRedesigned: value === 'new',
          },
        }),
      ).unwrap();
    }

    setIsLoading(false);
  };

  return (
    <HStack gap="8">
      <Text text={t('Вариант интерфейса')} />
      {isLoading ? (
        <Skeleton
          width={300}
          height={40}
        />
      ) : (
        <ListBox
          value={isAppRedesigned ? 'new' : 'old'}
          onChange={onChange}
          items={items}
        />
      )}
    </HStack>
  );
});
