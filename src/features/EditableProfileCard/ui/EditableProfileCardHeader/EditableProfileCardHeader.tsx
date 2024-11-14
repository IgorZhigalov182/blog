import { useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import cls from './EditableProfileCardHeader.module.scss';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/ProfileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';

interface EditableProfileCardHeaderProps {
  className?: string;
}

export const EditableProfileCardHeader = (props: PropsWithChildren<EditableProfileCardHeaderProps>) => {
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
    <HStack max justify="between" className={classNames(cls.profilePageHeader, {}, [className])}>
      <Text title={t('Профиль')} />
      {isCanEdit && (
        <>
          {readonly ? (
            <Button
              className={classNames(cls.editBtn)}
              theme={ThemeButton.OUTLINE}
              onClick={onEdit}
              data-testid="EditableProfileCardHeader.EditBtn">
              {t('Редактировать')}
            </Button>
          ) : (
            <>
              <Button
                className={classNames(cls.editBtn)}
                theme={ThemeButton.OUTLINE_RED}
                onClick={onCancelEdit}
                data-testid="EditableProfileCardHeader.CancelBtn">
                {t('Отменить')}
              </Button>
              <Button
                className={classNames(cls.saveBtn)}
                theme={ThemeButton.OUTLINE}
                onClick={onSave}
                data-testid="EditableProfileCardHeader.SaveBtn">
                {t('Сохранить')}
              </Button>
            </>
          )}
        </>
      )}
    </HStack>
  );
};
