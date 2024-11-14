import { CSSProperties, useMemo, type PropsWithChildren } from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';

interface AvatarProps {
    className?: string;
    src?: string;
    size?: number;
    alt?: string
}

export const Avatar = (props: PropsWithChildren<AvatarProps>) => {
  const {
    className, src, size, alt,
  } = props;
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(() => ({
    width: size || 100,
    height: size || 100,
  }), [size]);

  return (
    <img
      alt={alt}
      src={src}
      style={styles}
      className={classNames(cls.avatar, mods, [className])}
    />
  );
};
