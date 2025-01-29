import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleTextBlockComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextDeprecated } from '@/shared/ui';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(
  (props: PropsWithChildren<ArticleTextBlockComponentProps>) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.ArticleTextBlockComponent, {}, [className])}
      >
        {block.title && (
          <ToggleFeatures
            feature="isAppRedesigned"
            off={
              <TextDeprecated
                title={block.title}
                className={cls.title}
              />
            }
            on={
              <Text
                title={block.title}
                className={cls.title}
              />
            }
          />
        )}
        {block.paragraphs.map((paragraph) => (
          <ToggleFeatures
            feature="isAppRedesigned"
            off={
              <TextDeprecated
                key={paragraph}
                text={paragraph}
                className={cls.paragraph}
              />
            }
            on={
              <Text
                key={paragraph}
                text={paragraph}
                className={cls.paragraph}
              />
            }
          />
        ))}
      </div>
    );
  },
);
