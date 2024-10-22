import { HTMLAttributes, memo, ReactNode, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export enum CardTheme {
  OUTLINE = 'outline',
  NORMAL = 'normal',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
}

export const Card = memo((props: PropsWithChildren<CardProps>) => {
  const { className, children, theme = CardTheme.NORMAL, ...otherProps } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.card, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </div>
  );
});