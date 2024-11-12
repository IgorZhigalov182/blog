import { NotificationList } from '@/entities/Notification';
import { memo, useCallback, useState, type PropsWithChildren } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AnimationProvider } from '@/shared/lib/components/AnimationProvider';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Drawer } from '@/shared/ui/Drawer/Drawer';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Popover } from '@/shared/ui/Popups';
import Notification from '@/shared/assets/icons/nofification.svg';
import cls from './NotifciationButton.module.scss';

interface NotifciationButtonProps {
  className?: string;
}

export const NotifciationButton = memo((props: PropsWithChildren<NotifciationButtonProps>) => {
  const { className } = props;
  const [isOpen, setIsOpen] = useState(false);

  const onOpenDrawer = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const trigger = (
    <Button onClick={onOpenDrawer} theme={ThemeButton.CLEAR}>
      <Icon isInvertedColor Svg={Notification} />
    </Button>
  );

  return (
    <>
      <BrowserView>
        <Popover className={classNames(cls.NotifciationButton, {}, [className])} trigger={trigger}>
          <NotificationList className={cls.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
          <NotificationList />
        </Drawer>
      </MobileView>
    </>
  );
});
