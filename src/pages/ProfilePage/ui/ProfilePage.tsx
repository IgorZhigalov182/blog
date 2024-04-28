import { profileReducer } from 'entities/Profile';
import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducersList = {
    profile: profileReducer
}

interface ProfilePageProps {
    className?: string;
}

const ProfilePage = (props: PropsWithChildren<ProfilePageProps>) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('cls.ProfilePage', {}, [className])}>
                {t('Страница профиля')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;