import { useTranslation } from 'react-i18next';
import { ListBox } from '@/shared/ui/Popups';
import { Page } from '@/widgets/Page/ui/Page';
import { StarRaiting } from '@/shared/ui/StarRaiting/StarRaiting';
import { RaitingCard } from '@/entities/Raiting';

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

