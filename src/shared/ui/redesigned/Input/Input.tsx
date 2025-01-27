import React, {
  memo,
  ReactNode,
  useEffect,
  useRef,
  useState,
  type InputHTMLAttributes,
  type PropsWithChildren,
} from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Input.module.scss';
import { HStack } from '../Stack';
import { Text } from '../Text/Text';

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'value' | 'onChange' | 'readOnly' | 'size'
>;

type InputSize = 's' | 'm' | 'l';

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autoFocus?: boolean;
  readonly?: boolean;
  label?: string;
  size?: InputSize;
  addonLeft?: ReactNode;
  addonRight?: ReactNode;
}

export const Input = memo((props: PropsWithChildren<InputProps>) => {
  const {
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    autoFocus,
    readonly,
    label,
    size = 'm',
    addonLeft,
    addonRight,
    ...otherProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current?.focus();
    }
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e?.target?.value);
  };

  const onBlur = () => setIsFocused(false);
  const onFocus = () => setIsFocused(true);

  const mods = {
    [cls.readonly]: readonly,
    [cls.focus]: isFocused,
    [cls.withAddonLeft]: Boolean(addonLeft),
    [cls.withAddonRight]: Boolean(addonRight),
  };

  const input = (
    <div className={classNames(cls.inputWrapper, mods, [className, cls[size]])}>
      {addonLeft && <div className={cls.addonLeft}>{addonLeft}</div>}
      <input
        ref={ref}
        onBlur={onBlur}
        onFocus={onFocus}
        className={cls.input}
        value={value}
        type={type}
        onChange={onChangeHandler}
        readOnly={readonly}
        placeholder={placeholder}
        {...otherProps}
      />
      {addonRight && <div className={cls.addonRight}>{addonRight}</div>}
    </div>
  );

  if (label) {
    return (
      <HStack
        max
        gap="8"
      >
        <Text text={label} />
        {input}
      </HStack>
    );
  }

  return input;
});
