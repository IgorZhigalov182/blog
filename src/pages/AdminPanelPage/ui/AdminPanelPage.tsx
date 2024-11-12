import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';

const AdminPanelPage = () => {
  const { t } = useTranslation();

  return <Page>{t('Административная панель')}</Page>;
};

export default AdminPanelPage;

