import { memo, SVGProps, type PropsWithChildren } from 'react';
import cls from './Icon.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IconProps extends SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  isInvertedColor?: boolean;
}

/**
 * Устарел, используем новые компоненты из папки redesigned
 * @deprecated
 */
export const Icon = memo((props: PropsWithChildren<IconProps>) => {
  const { className, Svg, isInvertedColor, ...otherProps } = props;

  return (
    <Svg
      className={classNames(cls.Icon, { [cls.inverted]: isInvertedColor }, [
        className,
      ])}
      {...otherProps}
    />
  );
});
