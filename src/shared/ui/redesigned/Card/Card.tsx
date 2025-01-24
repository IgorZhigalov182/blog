import { HTMLAttributes, memo, ReactNode, type PropsWithChildren } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Card.module.scss';

export type CardVariant = 'normal' | 'outline' | 'light';
export type CardPadding = '0' | '8' | '16' | '24';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding;
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24',
};

export const Card = memo((props: PropsWithChildren<CardProps>) => {
  const {
    className,
    children,
    variant = 'normal',
    max,
    padding = '8',
    ...otherProps
  } = props;

  const paddings = mapPaddingToClass[padding];

  return (
    <div
      className={classNames(cls.card, { [cls.max]: max }, [
        className,
        cls[variant],
        paddings,
      ])}
      {...otherProps}
    >
      {children}
    </div>
  );
});
