import { memo, useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from '../../model/types/currency';
import { ListBoxDeprecated, ListBox } from '@/shared/ui';
import { ToggleFeatures } from '@/shared/lib/features';

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

export const CurrencySelect = memo(
  (props: PropsWithChildren<CurrencySelectProps>) => {
    const { className, value, onChange, readonly } = props;
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Currency);
      },
      [onChange],
    );

    const childrenProps = {
      className,
      value,
      defaultValue: t('Укажите валюту'),
      label: t('Укажите валюту'),
      items: options,
      onChange: onChangeHandler,
      readonly,
      direction: 'top right' as const,
    };

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={<ListBoxDeprecated {...childrenProps} />}
        on={<ListBox {...childrenProps} />}
      />
    );
  },
);
