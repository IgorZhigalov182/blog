import { memo, useCallback, type PropsWithChildren } from 'react';
import CopyIcon from '@/shared/assets/icons/CopyBtn.svg';
import CopyIconNew from '@/shared/assets/icons/copy.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './Code.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import {
  Button as ButtonDeprecated,
  ThemeButton,
} from '../../deprecated/Button/Button';
import { Icon } from '../Icon/Icon';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo((props: PropsWithChildren<CodeProps>) => {
  const { className, text } = props;

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToggleFeatures
      feature="isAppRedesigned"
      off={
        <pre className={classNames(cls.Code, {}, [className])}>
          <ButtonDeprecated
            className={cls.copyBtn}
            theme={ThemeButton.CLEAR}
            onClick={handleCopy}
          >
            <CopyIcon className={cls.copyIcon} />
          </ButtonDeprecated>
          <code>{text}</code>
        </pre>
      }
      on={
        <pre className={classNames(cls.CodeRedesigned, {}, [className])}>
          <Icon
            clickable
            onClick={handleCopy}
            className={cls.copyBtn}
            Svg={CopyIconNew}
          />
          <code>{text}</code>
        </pre>
      }
    />
  );
});
