import { Listbox as HListBox } from '@headlessui/react';
import { Fragment, PropsWithChildren, ReactNode, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ListBox.module.scss';
import { DropdownDirection, mapDirection } from '../../styles/mapper';
import popupCls from '../../styles/popup.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../../redesigned/Stack';
import { Icon } from '../../../Icon/Icon';
import ArrowIcon from '@/shared/assets/icons/arrow-bottom.svg';

export interface ListBoxItem<T extends string> {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface IListBox<T extends string> {
  items?: ListBoxItem<T>[];
  className?: string;
  value?: T;
  defaultValue?: string;
  readonly?: boolean;
  onChange: (value: T) => void;
  direction?: DropdownDirection;
  label?: string;
}

export function ListBox<T extends string>(
  props: PropsWithChildren<IListBox<T>>,
) {
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

  const selectedItem = useMemo(() => {
    return items?.find((item) => item.value === value);
  }, [items, value]);

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
          as={Button}
          disabled={readonly}
          className={popupCls.trigger}
          variant="fill"
          addonRight={<Icon Svg={ArrowIcon} />}
        >
          {selectedItem?.content ?? defaultValue}
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
                      [popupCls.selected]: selected,
                    },
                    [],
                  )}
                >
                  {selected}
                  <span>{content}</span>
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
