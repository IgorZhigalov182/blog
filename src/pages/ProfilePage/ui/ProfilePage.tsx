import { type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { EditableProfileCard } from '@/features/EditableProfileCard';
import { ProfileRaiting } from '@/features/ProfileRaiting';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = (props: PropsWithChildren<ProfilePageProps>) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation('profile');

  if (!id) {
    return null;
  }

  return (
    <Page
      className={classNames('', {}, [className])}
      data-testid="ProfilePage"
    >
      <EditableProfileCard id={id} />
      <ProfileRaiting profileId={id} />
    </Page>
  );
};

export default ProfilePage;
