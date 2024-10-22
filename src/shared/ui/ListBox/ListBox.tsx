import { Listbox as HListBox } from '@headlessui/react';
import { t } from 'i18next';
import { Fragment, memo, PropsWithChildren, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from '../Button/Button';
import cls from './ListBox.module.scss';
import { HStack } from '../Stack';
import { DropdownDirection } from 'shared/types/ui';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBox {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  readonly?: boolean;
  onChange: (value: string) => void;
  direction?: DropdownDirection;
  label?: string;
}

const mapDirection: Record<DropdownDirection, string> = {
  'top left': cls.optionTopLeft,
  'top right': cls.optionTopRight,
  'bottom right': cls.optionBottomRight,
  'bottom left': cls.optionBottomLeft,
};

export const ListBox = memo((props: PropsWithChildren<ListBox>) => {
  const { items, className, value, defaultValue, onChange, readonly, direction = 'bottom left', label } = props;

  return (
    <HStack gap="4">
      {label && <span>{`${label} >`}</span>}
      <HListBox
        as="div"
        disabled={readonly}
        className={classNames(cls.listBox, {}, [className])}
        value={value}
        onChange={onChange}>
        <HListBox.Button disabled={readonly} className={cls.button}>
          <Button disabled={readonly}>{value ?? defaultValue ?? t('Выберите значение')}</Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, [mapDirection[direction]])}>
          {items?.map(({ value, content, disabled }) => (
            <HListBox.Option as={Fragment} key={value} value={value} disabled={disabled}>
              {({ active, selected }) => (
                <li className={classNames(cls.item, { [cls.active]: active, [cls.disabled]: disabled }, [])}>
                  {selected && '>'}
                  <span>{content}</span>
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
});
