import { classNames } from '@/shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { HTMLAttributeAnchorTarget, memo, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  INVERTED = 'inverted',
  RED = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  target?: HTMLAttributeAnchorTarget;
  children?: ReactNode;
}

export const AppLink = memo((props: AppLinkProps) => {
  const { to, className, children, target, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;

  return (
    <Link
      target={target}
      to={to}
      className={classNames(cls.AppLink, { [cls[theme]]: true }, [className])}
      {...otherProps}>
      {children}
    </Link>
  );
});

