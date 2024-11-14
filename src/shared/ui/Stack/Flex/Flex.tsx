import {
  DetailedHTMLProps, HTMLAttributes, memo, type PropsWithChildren,
} from 'react';
import { classNames, Mods } from '@/shared/lib/classNames/classNames';
import cls from './Flex.module.scss';

export type FlexJustify = 'start' | 'center' | 'end' | 'between' | 'around';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '2' | '4' | '8' | '16' | '32' | '64' | '128';

const justifyClassesMap: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  center: cls.justifyCenter,
  end: cls.justifyEnd,
  between: cls.justyifyBetween,
  around: cls.justifyAround,
};

const alignClassesMap: Record<FlexAlign, string> = {
  start: cls.alignStart,
  center: cls.alignCenter,
  end: cls.alignEnd,
};

const directionClassesMap: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const flexGapClassesMap: Record<FlexGap, string> = {
  2: cls.gap2,
  4: cls.gap4,
  8: cls.gap8,
  16: cls.gap16,
  32: cls.gap32,
  64: cls.gap64,
  128: cls.gap128,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends Omit<DivProps, 'ref'> {
  className?: string;
  justify?: FlexJustify;
  align?: FlexAlign;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
}

export const Flex = memo((props: PropsWithChildren<FlexProps>) => {
  const {
    className, children, justify = 'start', align = 'center', direction = 'row', gap, max,
  } = props;

  const classes = [
    className,
    directionClassesMap[direction],
    alignClassesMap[align],
    justifyClassesMap[justify],
    gap && flexGapClassesMap[gap],
  ];

  const mode: Mods = {
    [cls.max]: max,
  };

  return <div className={classNames(cls.flex, mode, classes)}>{children}</div>;
});
