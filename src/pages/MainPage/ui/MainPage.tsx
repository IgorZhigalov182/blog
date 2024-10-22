import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Page } from 'widgets/Page/ui/Page';

const MainPage = () => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('Главная страница')}
      <ListBox
        onChange={() => console.log('12')}
        value={undefined}
        items={[
          { value: '1', content: '1' },
          { value: '2', content: '2', disabled: true },
          { value: '3', content: '3' },
          { value: '4', content: '4' },
        ]}
      />
    </Page>
  );
};

export default MainPage;

