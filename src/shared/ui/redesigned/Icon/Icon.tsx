import { memo, SVGProps, type PropsWithChildren } from 'react';
import cls from './Icon.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type SvgProps = Omit<SVGProps<SVGSVGElement>, 'onClick'>;

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.VFC<SVGProps<SVGSVGElement>>;
}

interface NoClickableIconProps extends IconBaseProps {
  clickable?: false;
}

interface ClickableIconProps extends IconBaseProps {
  clickable: true;
  onClick: () => void;
}

type IconProps = NoClickableIconProps | ClickableIconProps;

export const Icon = memo((props: PropsWithChildren<IconProps>) => {
  const {
    className,
    Svg,
    width = 32,
    height = 32,
    clickable,
    ...otherProps
  } = props;

  const svg = (
    <Svg
      className={classNames(cls.Icon, {}, [className])}
      width={width}
      height={height}
      {...otherProps}
      onClick={undefined}
    />
  );

  if (clickable) {
    return (
      <button
        onClick={props.onClick}
        className={cls.button}
        style={{ width, height }}
      >
        {svg}
      </button>
    );
  }

  return svg;
});
