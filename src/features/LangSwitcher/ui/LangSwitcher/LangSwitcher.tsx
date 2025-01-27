import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ButtonDeprecated, ThemeButton } from '@/shared/ui';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      on={
        <Button
          variant="clear"
          onClick={toggle}
        >
          {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
      }
      off={
        <ButtonDeprecated
          className={classNames('', {}, [className])}
          theme={ThemeButton.CLEAR}
          onClick={toggle}
        >
          {t(short ? 'Короткий язык' : 'Язык')}
        </ButtonDeprecated>
      }
    />
  );
});
