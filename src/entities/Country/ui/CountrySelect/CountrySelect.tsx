import { Country } from 'entities/Country/model/types/country';
import { memo, useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';

interface CountrySelectProps {
    className?: string;
    onChange?: (value: Country) => void;
    value?: Country;
    readonly?: boolean;
}

const options = [
    { value: Country.Armenia, content: Country.Armenia },
    { value: Country.Belarus, content: Country.Belarus },
    { value: Country.Kazakhstan, content: Country.Kazakhstan },
    { value: Country.Russia, content: Country.Russia },
    { value: Country.Ukraine, content: Country.Ukraine },
];

export const CountrySelect = memo((props: PropsWithChildren<CountrySelectProps>) => {
    const { className, onChange, value, readonly } = props;
    const { t } = useTranslation();

    const onChangeCountry = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <Select
            label={t('Укажите страну')}
            value={value}
            onChange={onChangeCountry}
            options={options}
            readonly={readonly}
            className={className}
        />
    );
});