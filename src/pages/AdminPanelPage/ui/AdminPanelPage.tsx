import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
  const { t } = useTranslation();

  return (
    <Page data-testid="AdminPanelPage">{t('Административная панель')}</Page>
  );
};

export default AdminPanelPage;
