import { Listbox as HListBox } from '@headlessui/react';
import { t } from 'i18next';
import { Fragment, memo, PropsWithChildren, ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { DropdownDirection, mapDirection } from '../../styles/mapper';
import popupCls from '../../styles/popup.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../../redesigned/Stack';

export interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface IListBox {
  items?: ListBoxItem[];
  className?: string;
  value?: string;
  defaultValue?: string;
  readonly?: boolean;
  onChange: (value: string) => void;
  direction?: DropdownDirection;
  label?: string;
}

export const ListBox = memo((props: PropsWithChildren<IListBox>) => {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    direction = 'bottom left',
    label,
  } = props;

  return (
    <HStack gap="4">
      {label && <span>{`${label} >`}</span>}
      <HListBox
        as="div"
        disabled={readonly}
        className={classNames(cls.listBox, {}, [className, popupCls.popup])}
        value={value}
        onChange={onChange}
      >
        <HListBox.Button
          disabled={readonly}
          className={popupCls.trigger}
        >
          <Button disabled={readonly}>
            {value ?? defaultValue ?? (t('Выберите значение') as string)}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, [
            mapDirection[direction],
            popupCls.menu,
          ])}
        >
          {items?.map(({ value, content, disabled }) => (
            <HListBox.Option
              as={Fragment}
              key={value}
              value={value}
              disabled={disabled}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(
                    cls.item,
                    {
                      [popupCls.active]: active,
                      [popupCls.disabled]: disabled,
                    },
                    [],
                  )}
                >
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
