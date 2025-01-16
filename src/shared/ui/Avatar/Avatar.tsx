import { CSSProperties, useMemo, type PropsWithChildren } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import { AppImage } from '../AppImage/AppImage';
import UserIcon from '../../assets/icons/user-filled.svg';
import { Icon } from '../Icon/Icon';
import { Skeleton } from '../Skeleton/Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}

export const Avatar = (props: PropsWithChildren<AvatarProps>) => {
  const { className, src, size, alt, fallbackInverted } = props;
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  const fallback = (
    <Skeleton
      border="50%"
      width={size}
      height={size}
    />
  );
  const errorFallback = (
    <Icon
      isInvertedColor={fallbackInverted}
      Svg={UserIcon}
      width={size}
      height={size}
    />
  );

  return (
    <AppImage
      fallback={fallback}
      errorFallback={errorFallback}
      alt={alt}
      src={src}
      style={styles}
      className={classNames(cls.avatar, mods, [className])}
    />
  );
};
