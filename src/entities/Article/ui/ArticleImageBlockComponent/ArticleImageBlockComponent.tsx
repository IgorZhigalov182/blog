import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextAlign } from 'shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo((props: PropsWithChildren<ArticleImageBlockComponentProps>) => {
  const { className, block } = props;

  return (
    <div className={classNames(cls.ArticleImageBlockComponent, {}, [className])}>
      <img src={block?.src} className={cls.img} alt={block?.title} />
      {block?.title && <Text text={block.title} align={TextAlign.CENTER} className={cls.title} />}
    </div>
  );
});