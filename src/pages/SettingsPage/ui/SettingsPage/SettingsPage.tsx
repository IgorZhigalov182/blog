import { memo, PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, VStack } from '@/shared/ui';
import { Page } from '@/widgets/Page';
import { UiDesignSwitcher } from '@/features/UiDesignSwitcher';

interface SettingsPageProps {
  className?: string;
}

const SettingsPage = memo((props: PropsWithChildren<SettingsPageProps>) => {
  const { className, children } = props;
  const { t } = useTranslation();

  return (
    <Page>
      <VStack gap="16">
        <Text text={t('Настройки')} />
        <UiDesignSwitcher />
      </VStack>
    </Page>
  );
});

export default SettingsPage;
