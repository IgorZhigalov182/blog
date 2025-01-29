import { memo, type PropsWithChildren } from 'react';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextDeprecated } from '@/shared/ui';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(
  (props: PropsWithChildren<ArticleImageBlockComponentProps>) => {
    const { className, block } = props;

    return (
      <div
        className={classNames(cls.ArticleImageBlockComponent, {}, [className])}
      >
        <img
          src={block?.src}
          className={cls.img}
          alt={block?.title}
        />
        {block?.title && (
          <ToggleFeatures
            feature="isAppRedesigned"
            off={
              <TextDeprecated
                align={TextAlign.CENTER}
                text={block.title}
                className={cls.title}
              />
            }
            on={
              <Text
                text={block.title}
                align="center"
                className={cls.paragraph}
              />
            }
          />
        )}
      </div>
    );
  },
);
