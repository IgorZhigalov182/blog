import { Currency } from 'entities/Currency/model/types/currency';
import { memo, useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { Select } from 'shared/ui/Select/Select';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo((props: PropsWithChildren<CurrencySelectProps>) => {
  const { className, value, onChange, readonly } = props;
  const { t } = useTranslation();

  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency);
    },
    [onChange]
  );

  return (
    <ListBox
      items={options}
      defaultValue={t('Укажите валюту')}
      value={value}
      onChange={onChangeHandler}
      className={className}
      readonly={readonly}
      label={t('Укажите валюту')}
    />
  );
});
