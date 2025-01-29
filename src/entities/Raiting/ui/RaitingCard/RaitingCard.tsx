import { memo, PropsWithChildren, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import {
  ButtonDeprecated,
  ThemeButton,
  CardDeprecated,
  Drawer,
  InputDeprecated,
  Modal,
  HStack,
  VStack,
  StarRaiting,
  TextDeprecated,
  Text,
  Input,
  Button,
  Card,
} from '@/shared/ui';
import { ToggleFeatures } from '@/shared/lib/features';

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
  const {
    className,
    title,
    feedbackTitle,
    hasFeedback,
    onCancel,
    onAccept,
    rate = 0,
  } = props;
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

  const modalContent = (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <>
          <TextDeprecated title={feedbackTitle} />
          <InputDeprecated
            value={feedback}
            onChange={setFeedback}
            autoFocus
            placeholder={t('Ваш отзыв')}
            data-testid="RatingCard.Input"
          />
        </>
      }
      on={
        <>
          <Text title={feedbackTitle} />
          <Input
            value={feedback}
            onChange={setFeedback}
            autoFocus
            placeholder={t('Ваш отзыв')}
            data-testid="RatingCard.Input"
          />
        </>
      }
    />
  );

  const content = (
    <>
      <VStack
        align="center"
        gap="32"
      >
        <ToggleFeatures
          feature="isAppRedesigned"
          off={
            <TextDeprecated
              title={starsCount ? t('Спасибо за оценку') : title}
            />
          }
          on={<Text title={starsCount ? t('Спасибо за оценку') : title} />}
        />
        <StarRaiting
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>
      <BrowserView>
        <Modal
          isOpen={isModalOpen}
          lazy
        >
          <VStack
            max
            gap="32"
          >
            {modalContent}

            <ToggleFeatures
              feature="isAppRedesigned"
              off={
                <HStack
                  max
                  gap="16"
                  justify="end"
                >
                  <ButtonDeprecated
                    onClick={handleCancel}
                    theme={ThemeButton.OUTLINE_RED}
                    data-testid="RatingCard.Close"
                  >
                    {t('Отмена')}
                  </ButtonDeprecated>
                  <ButtonDeprecated
                    onClick={handleAccept}
                    data-testid="RatingCard.Send"
                  >
                    {t('Отправить')}
                  </ButtonDeprecated>
                </HStack>
              }
              on={
                <HStack
                  max
                  gap="16"
                  justify="end"
                >
                  <Button
                    onClick={handleCancel}
                    variant="outline"
                    data-testid="RatingCard.Close"
                  >
                    {t('Отмена')}
                  </Button>
                  <Button
                    onClick={handleAccept}
                    data-testid="RatingCard.Send"
                  >
                    {t('Отправить')}
                  </Button>
                </HStack>
              }
            />
          </VStack>
        </Modal>
      </BrowserView>
      <MobileView>
        <Drawer
          isOpen={isModalOpen}
          lazy
        >
          <VStack
            gap="32"
            max
          >
            {modalContent}
            <ToggleFeatures
              feature="isAppRedesigned"
              off={
                <ButtonDeprecated
                  maxWidth
                  onClick={handleAccept}
                >
                  {t('Отправить')}
                </ButtonDeprecated>
              }
              on={
                <Button
                  maxWidth
                  size="l"
                  onClick={handleAccept}
                >
                  {t('Отправить')}
                </Button>
              }
            />
          </VStack>
        </Drawer>
      </MobileView>
    </>
  );

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <CardDeprecated
          className={className}
          max
          data-testid="RatingCard"
        >
          {content}
        </CardDeprecated>
      }
      on={
        <Card
          padding="24"
          border="partial"
          className={className}
          max
          data-testid="RatingCard"
        >
          {content}
        </Card>
      }
    />
  );
});
