import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import {
  ButtonDeprecated,
  IconDeprecated,
  ThemeButton,
  Icon,
} from '@/shared/ui';
import { useAppDispatch, useTheme } from '@/shared/lib/hooks';
import { saveJsonSettings } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { toggleTheme } = useTheme();
  const dispatch = useAppDispatch();

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({ theme: newTheme }));
    });
  }, [toggleTheme, dispatch]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <ButtonDeprecated
          theme={ThemeButton.CLEAR}
          className={classNames('', {}, [className])}
          onClick={onToggleHandler}
        >
          <IconDeprecated
            Svg={ThemeIconDeprecated}
            width={40}
            height={40}
            isInvertedColor
          />
        </ButtonDeprecated>
      }
      on={
        <Icon
          Svg={ThemeIcon}
          onClick={onToggleHandler}
          clickable
        />
      }
    />
  );
});
