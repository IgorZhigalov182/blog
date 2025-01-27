import { type PropsWithChildren } from 'react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { Profile } from '../../model/types/profile';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  ProfileCardDeprecated,
  ProfileCardDeprecatedError,
  ProfileCardDeprecatedSkeleton,
} from '../ProfileCardDeprecated/ProfileCardDeprecated';
import {
  ProfileCardRedesigned,
  ProfileCardRedesignedError,
  ProfileCardRedesignedSkeleton,
} from '../ProfileCardRedesigned/ProfileCardRedesigned';

export interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  readonly?: boolean;
  onChangeFirstname?: (value?: string) => void;
  onChangeLastname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeCurrency?: (value: Currency) => void;
  onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = (props: PropsWithChildren<ProfileCardProps>) => {
  const { isLoading, error } = props;

  if (isLoading) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={<ProfileCardDeprecatedSkeleton />}
        on={<ProfileCardRedesignedSkeleton />}
      />
    );
  }

  if (error) {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={<ProfileCardDeprecatedError />}
        on={<ProfileCardRedesignedError />}
      />
    );
  }

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={<ProfileCardDeprecated {...props} />}
      on={<ProfileCardRedesigned {...props} />}
    />
  );
};
