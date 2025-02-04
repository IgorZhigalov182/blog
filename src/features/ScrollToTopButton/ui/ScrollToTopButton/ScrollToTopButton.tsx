import { memo, type PropsWithChildren } from 'react';
import { Icon } from '@/shared/ui';
import ScrollUp from '@/shared/assets/icons/circle-up.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ScrollToTopButton.module.scss';

interface ScrollToTopButtonProps {
  className?: string;
}

export const ScrollToTopButton = memo(
  (props: PropsWithChildren<ScrollToTopButtonProps>) => {
    const { className } = props;

    const onClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
      <Icon
        width={32}
        height={32}
        Svg={ScrollUp}
        clickable
        onClick={onClick}
        className={classNames(cls.className, {}, [className])}
      />
    );
  },
);
