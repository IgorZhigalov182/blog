import { memo, useCallback, useState, type PropsWithChildren } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { NotificationList } from '@/entities/Notification';
import NotificationDeprecated from '@/shared/assets/icons/notification-20-20.svg';
import Notification from '@/shared/assets/icons/nofification.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  Button as ButtonDeprecated,
  ThemeButton,
  Drawer,
  Icon as IconDeprecated,
  PopoverDeprecated,
  Popover,
} from '@/shared/ui';

import cls from './NotifciationButton.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '@/shared/ui/redesigned';

interface NotifciationButtonProps {
  className?: string;
}

export const NotifciationButton = memo(
  (props: PropsWithChildren<NotifciationButtonProps>) => {
    const { className } = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
      setIsOpen(true);
    }, []);

    const onCloseDrawer = useCallback(() => {
      setIsOpen(false);
    }, []);

    const trigger = (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <ButtonDeprecated
            onClick={onOpenDrawer}
            theme={ThemeButton.CLEAR}
          >
            <IconDeprecated
              isInvertedColor
              Svg={NotificationDeprecated}
            />
          </ButtonDeprecated>
        }
        on={
          <Icon
            Svg={Notification}
            clickable
            onClick={onOpenDrawer}
          />
        }
      />
    );

    return (
      <>
        <BrowserView>
          <ToggleFeatures
            feature="isAppRedesigned"
            off={
              <PopoverDeprecated
                className={classNames(cls.NotifciationButton, {}, [className])}
                trigger={trigger}
              >
                <NotificationList className={cls.notifications} />
              </PopoverDeprecated>
            }
            on={
              <Popover
                className={classNames(cls.NotifciationButton, {}, [className])}
                trigger={trigger}
              >
                <NotificationList className={cls.notifications} />
              </Popover>
            }
          />
        </BrowserView>
        <MobileView>
          {trigger}
          <Drawer
            isOpen={isOpen}
            onClose={onCloseDrawer}
          >
            <NotificationList />
          </Drawer>
        </MobileView>
      </>
    );
  },
);
