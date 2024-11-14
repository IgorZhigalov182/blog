import { useTranslation } from 'react-i18next';
import { RaitingCard } from '@/entities/Raiting';
import { Page } from '@/widgets/Page';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('Главная страница')}
      <RaitingCard title={t('Оцените статью')} feedbackTitle={t('Оставьте свой отзыв')} />
    </Page>
  );
};

export default MainPage;

