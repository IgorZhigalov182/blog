import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
  const { t } = useTranslation();

  return <Page>{t('Вам не доступна эта страница')}</Page>;
};

export default ForbiddenPage;

