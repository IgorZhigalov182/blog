import { Fragment, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Dropdown.module.scss';
import { Button } from '../Button/Button';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink } from '../AppLink/AppLink';

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

const mapDirection: Record<DropdownDirection, string> = {
  'top left': cls.optionTopLeft,
  'top right': cls.optionTopRight,
  'bottom right': cls.optionBottomRight,
  'bottom left': cls.optionBottomLeft,
};

export const Dropdown = (props: DropdownProps) => {
  const { className, items, trigger, direction = 'bottom left' } = props;

  return (
    <Menu as="div" className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={classNames(cls.btn)}>{trigger}</Menu.Button>
      <Menu.Items className={classNames(cls.menu, {}, [mapDirection[direction]])}>
        {items.map(({ content, disabled, onClick, href }) => {
          const node = ({ active }: { active: boolean }) => (
            <Button
              onClick={onClick}
              disabled={disabled}
              className={classNames(cls.item, { [cls.active]: active }, [])}>
              {content}
            </Button>
          );

          if (href) {
            return (
              <Menu.Item as={AppLink} to={href} disabled={disabled}>
                {node}
              </Menu.Item>
            );
          }

          return (
            <Menu.Item as={Fragment} disabled={disabled}>
              {node}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};
