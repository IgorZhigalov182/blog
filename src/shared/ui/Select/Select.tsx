import { ChangeEvent, memo, useMemo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames, Mods } from 'shared/lib/classNames/classNames';
import cls from './Select.module.scss';

interface SelectOption {
    value: string,
    content: string
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void
}

export const Select = memo((props: PropsWithChildren<SelectProps>) => {
    const { className, label, options, value, onChange } = props;
    const { t } = useTranslation();

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const optionList = useMemo(() => options?.map(({ content, value }) => (
        <option
            className={cls.option}
            value={value}
            key={value}
        >
            {content}
        </option>
    )), [options]);

    const mods: Mods = {};

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && <span className={cls.label}>{label + '>'}</span>}
            <select
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
});