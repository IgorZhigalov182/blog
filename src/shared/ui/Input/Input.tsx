import React, {
    memo, useEffect, useRef, useState, type InputHTMLAttributes, type PropsWithChildren,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    autoFocus?: boolean;
}

export const Input = memo((props: PropsWithChildren<InputProps>) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        autoFocus,
        ...otherProps
    } = props;

    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
        if (autoFocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autoFocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e?.target?.value);
        setCaretPosition(e?.target?.value?.length);
    };

    const onBlur = () => setIsFocused(false);
    const onFocus = () => setIsFocused(true);
    const onSelect = (e: any) => {
        setCaretPosition(e?.target?.selectionStart || 0);
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            {placeholder
                && (
                    <div className={cls.placeholder}>
                        {`${placeholder} >`}
                    </div>
                )}
            <div className={cls.caretWrapper}>
                <input
                    ref={ref}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    className={cls.input}
                    value={value}
                    type={type}
                    onChange={onChangeHandler}
                    onSelect={onSelect}
                    {...otherProps}
                />
                {isFocused
                    && (
                        <span
                            className={cls.caret}
                            style={{ left: `${caretPosition * 9}px` }}
                        />
                    )}
            </div>
        </div>
    );
});
