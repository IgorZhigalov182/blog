import { useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Text } from 'shared/ui/Text/Text';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { getProfileData, getProfileReadonly, profileActions, updateProfileData } from 'entities/Profile';
import cls from './ProfilePageHeader.module.scss';
import { validateProfileData } from 'entities/Profile/model/services/validateProfileData/validateProfileData';
import { useParams } from 'react-router-dom';
import { getUserAuthData } from 'entities/User';
import { HStack, VStack } from 'shared/ui/Stack';

interface ProfilePageHeaderProps {
  className?: string;
}

export const ProfilePageHeader = (props: PropsWithChildren<ProfilePageHeaderProps>) => {
  const { className } = props;
  const { t } = useTranslation();

  const readonly = useSelector(getProfileReadonly);
  const dispatch = useAppDispatch();
  const authData = useSelector(getUserAuthData);
  const profileData = useSelector(getProfileData);
  const isCanEdit = authData?.id === profileData?.id;

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadonly(false));
  }, [dispatch]);

  const onCancelEdit = useCallback(() => {
    dispatch(profileActions.cancelEdit());
  }, [dispatch]);

  const onSave = useCallback(() => {
    dispatch(updateProfileData());
  }, [dispatch]);

  return (
    <HStack justify="between" className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {isCanEdit && (
        <>
          {readonly ? (
            <Button className={classNames(cls.editBtn)} theme={ThemeButton.OUTLINE} onClick={onEdit}>
              {t('Редактировать')}
            </Button>
          ) : (
            <>
              <Button className={classNames(cls.editBtn)} theme={ThemeButton.OUTLINE_RED} onClick={onCancelEdit}>
                {t('Отменить')}
              </Button>
              <Button className={classNames(cls.saveBtn)} theme={ThemeButton.OUTLINE} onClick={onSave}>
                {t('Сохранить')}
              </Button>
            </>
          )}
        </>
      )}
    </HStack>
  );
};
