import { memo, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { isMobile } from 'react-device-detect';
import { saveJsonSettings, useJsonSettings } from '@/entities/User';
import { Drawer, Modal, Text } from '@/shared/ui';
import { useAppDispatch } from '@/shared/lib/hooks';

export const ArticlePageGreeting = memo(() => {
  const { t } = useTranslation();
  const { isArticlesPageHasBeenOpen } = useJsonSettings();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!isArticlesPageHasBeenOpen) {
      setIsOpen(true);
      dispatch(saveJsonSettings({ isArticlesPageHasBeenOpen: true }));
    }
  }, [dispatch, isArticlesPageHasBeenOpen]);

  const text = (
    <Text
      title={t('Добро пожаловать на страницу статей')}
      text={t(
        'Здесь вы можете искать и просматривать статьи на различные темы',
      )}
    />
  );

  if (isMobile) {
    return (
      <Drawer
        lazy
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        {text}
      </Drawer>
    );
  }

  return (
    <Modal
      isOpen={isOpen}
      lazy
      onClose={() => setIsOpen(false)}
    >
      {text}
    </Modal>
  );
});
