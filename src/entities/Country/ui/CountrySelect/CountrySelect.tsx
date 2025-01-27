import { useTranslation } from 'react-i18next';
import { memo, useCallback, type PropsWithChildren } from 'react';
import { Country } from '../../model/types/country';
import { ListBox, ListBoxDeprecated } from '@/shared/ui';
import { ToggleFeatures } from '@/shared/lib/features';

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

export const CountrySelect = memo(
  (props: PropsWithChildren<CountrySelectProps>) => {
    const { className, onChange, value, readonly } = props;
    const { t } = useTranslation();

    const onChangeCountry = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    const childrenProps = {
      items: options,
      value,
      defaultValue: t('Укажите страну'),
      onChange: onChangeCountry,
      readonly,
      className,
      direction: 'top right' as const,
      label: t('Укажите страну'),
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
