import cls from './Page.module.scss';
import { memo, MutableRefObject, useRef, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfiniteScroll } from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface PageProps {
  className?: string;
  onScrollEnd?: () => void;
}

export const Page = memo((props: PropsWithChildren<PageProps>) => {
  const { className, children, onScrollEnd } = props;
  const { t } = useTranslation();
  const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

  useInfiniteScroll({ callback: onScrollEnd, triggerRef, wrapperRef });

  return (
    <section ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
      {children}
      <div ref={triggerRef} />
    </section>
  );
});
