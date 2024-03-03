import { classNames } from 'shared/lib/classNames/classNames';
import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: PropsWithChildren<LangSwitcherProps>) => {
  const { className } = props;

  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames(cls.langswitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t('Язык')}
    </Button>
  );
};
