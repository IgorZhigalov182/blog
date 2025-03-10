import { Popover as HPopover } from '@headlessui/react';
import { ReactNode } from 'react';
import popupCls from '../../styles/popup.module.scss';
import { DropdownDirection, mapDirection } from '../../styles/mapper';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  trigger?: ReactNode;
  direction?: DropdownDirection;
  children: ReactNode;
}

export const Popover = ({
  className,
  trigger,
  direction = 'bottom left',
  children,
}: PopoverProps) => (
  <HPopover
    className={classNames(cls.Popover, {}, [className, popupCls.popup])}
  >
    <HPopover.Button
      as="div"
      className={popupCls.trigger}
    >
      {trigger}
    </HPopover.Button>
    <HPopover.Panel
      className={classNames(cls.panel, {}, [
        mapDirection[direction],
        popupCls.menu,
      ])}
    >
      {children}
    </HPopover.Panel>
  </HPopover>
);
