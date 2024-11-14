import { memo, useCallback, type PropsWithChildren } from 'react';
import CopyIcon from '@/shared/assets/icons/CopyBtn.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '../Button/Button';
import cls from './Code.module.scss';

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
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copyBtn} theme={ThemeButton.CLEAR} onClick={handleCopy}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
