import { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { Button } from '../../../Button/Button';
import { AppLink } from '../../../AppLink/AppLink';
import { DropdownDirection, mapDirection } from '../../styles/mapper';
import popupCls from '../../styles/popup.module.scss';

export interface DropdownItem {
  content: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger?: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown = (props: DropdownProps) => {
  const { className, items, trigger, direction = 'bottom left' } = props;

  return (
    <Menu
      as="div"
      className={classNames(cls.Dropdown, {}, [className, popupCls.popup])}
    >
      <Menu.Button className={classNames(popupCls.trigger)}>
        {trigger}
      </Menu.Button>
      <Menu.Items
        className={classNames(cls.menu, {}, [mapDirection[direction]])}
      >
        {items.map(({ content, disabled, onClick, href }, index) => {
          const node = ({ active }: { active: boolean }) => (
            <Button
              onClick={onClick}
              disabled={disabled}
              className={classNames(
                cls.item,
                { [popupCls.active]: active },
                [],
              )}
            >
              {content}
            </Button>
          );

          if (href) {
            return (
              <Menu.Item
                as={AppLink}
                key={index}
                to={href}
                disabled={disabled}
              >
                {node}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item
              as={Fragment}
              key={index}
              disabled={disabled}
            >
              {node}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
