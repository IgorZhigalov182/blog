import { memo, useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RaitingCard } from '@/entities/Raiting';
import { getUserAuthData } from '@/entities/User';
import {
  useGetProfileRaitingQuery,
  useRateProfileMutation,
} from '../model/api/profileRaitingApi';
import cls from './ProfileRaiting.module.scss';
import { Skeleton } from '@/shared/ui';

interface ProfileRaitingProps {
  className?: string;
  profileId: string;
}

export const ProfileRaiting = memo(
  (props: PropsWithChildren<ProfileRaitingProps>) => {
    const { profileId, className } = props;
    const { t } = useTranslation();
    const userId = useSelector(getUserAuthData)?.id ?? '';

    const { data, isLoading } = useGetProfileRaitingQuery({
      profileId,
      userId,
    });
    const rating = data?.[0];

    console.log(data);

    const [rateProfile] = useRateProfileMutation();

    const handleRate = useCallback((rate: number, feedback?: string) => {
      try {
        rateProfile({
          userId,
          profileId,
          rate,
          feedback,
        });
      } catch (error) {
        console.error(error);
      }
    }, []);

    const onCancel = useCallback((rate: number) => {
      handleRate(rate);
    }, []);

    const onAccept = useCallback((rate: number, feedback?: string) => {
      handleRate(rate, feedback);
    }, []);

    if (isLoading) {
      return (
        <Skeleton
          width="100%"
          height="130px"
          className={cls.ProfileRaiting}
        />
      );
    }

    if (!data || !data?.length) {
      return null;
    }

    return (
      <RaitingCard
        feedbackTitle={t('Прокомментируйте профиль')}
        onCancel={onCancel}
        onAccept={onAccept}
        rate={rating?.rate}
        hasFeedback
        title={t('Оцените профиль')}
        className={cls.ProfileRaiting}
      />
    );
  },
);
