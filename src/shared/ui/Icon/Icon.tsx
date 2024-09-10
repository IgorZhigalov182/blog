import cls from './Icon.module.scss';
import { memo, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

interface IconProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const Icon = memo((props: PropsWithChildren<IconProps>) => {
  const { className, Svg } = props;

  return <Svg className={classNames(cls.Icon, {}, [className])} />;
});
