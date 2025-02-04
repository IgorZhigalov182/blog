import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ScrollToolbar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui';
import { ScrollToTopButton } from '@/features/ScrollToTopButton';

interface ScrollToolbarProps {
  className?: string;
}

export const ScrollToolbar = memo(
  (props: PropsWithChildren<ScrollToolbarProps>) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
      <VStack
        justify="center"
        align="center"
        max
        className={classNames(cls.ScrollToolbar, {}, [className])}
      >
        <ScrollToTopButton />
      </VStack>
    );
  },
);
