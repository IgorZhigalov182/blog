import { HTMLAttributes, memo, ReactNode, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo((props: PropsWithChildren<CardProps>) => {
  const { className, children, ...otherProps } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(cls.card, {}, [className])} {...otherProps}>
      {children}
    </div>
  );
});
