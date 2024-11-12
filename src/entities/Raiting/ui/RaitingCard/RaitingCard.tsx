import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Input } from '@/shared/ui/Input/Input';
import { Modal } from '@/shared/ui/Modal/Modal';
import { HStack, VStack } from '@/shared/ui/Stack';
import { StarRaiting } from '@/shared/ui/StarRaiting/StarRaiting';
import { Text } from '@/shared/ui/Text/Text';
import { memo, PropsWithChildren, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';

interface RaitingProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RaitingCard = memo((props: PropsWithChildren<RaitingProps>) => {
  const { className, title, feedbackTitle, hasFeedback, onCancel, onAccept, rate = 0 } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');

  const { t } = useTranslation();

  const onSelectStars = useCallback((selectedStarsCount: number) => {
    setStarsCount(selectedStarsCount);
    if (hasFeedback) {
      setIsModalOpen(true);
    } else {
      onAccept?.(selectedStarsCount);
    }
    setIsModalOpen(true);
  }, []);

  const handleAccept = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [starsCount, onAccept, feedback]);

  const handleCancel = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [starsCount, onCancel]);

  const content = (
    <>
      <Text title={feedbackTitle} />
      <Input value={feedback} onChange={setFeedback} autoFocus placeholder={t('Ваш отзыв')} />
    </>
  );

  return (
    <Card className={className}>
      <VStack align="center" gap="32">
        <Text title={starsCount ? t('Спасибо за оценку') : title} />
        <StarRaiting selectedStars={starsCount} size={40} onSelect={onSelectStars} />
      </VStack>
      <BrowserView>
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {content}
            <HStack max gap="16" justify="end">
              <Button onClick={handleCancel} theme={ThemeButton.OUTLINE_RED}>
                {t('Отмена')}
              </Button>
              <Button onClick={handleAccept}>{t('Отправить')}</Button>
            </HStack>
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer isOpen={isModalOpen} lazy>
          <VStack gap="32" max>
            {content}
            <Button maxWidth onClick={handleAccept}>
              {t('Отправить')}
            </Button>
          </VStack>
        </Drawer>
      </MobileView>
    </Card>
  );
});

