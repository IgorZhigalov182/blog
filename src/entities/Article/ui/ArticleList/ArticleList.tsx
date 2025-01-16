import {
  HTMLAttributeAnchorTarget,
  memo,
  ReactNode,
  type PropsWithChildren,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign } from '@/shared/ui';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';
import { ArticleView } from '../../model/contst/articleConsts';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  view?: ArticleView;
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView): ReactNode =>
  new Array(view === ArticleView.GRID ? 9 : 3).fill(0).map((_, index) => (
    <ArticleListItemSkeleton
      view={view}
      key={index}
      className={cls.card}
    />
  ));

export const ArticleList = memo(
  (props: PropsWithChildren<ArticleListProps>) => {
    const {
      className,
      articles,
      view = ArticleView.GRID,
      isLoading,
      target,
    } = props;
    const { t } = useTranslation('');

    if (articles.length === 0 && !isLoading) {
      return (
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
          <Text
            title={t('Статьи не найдены')}
            align={TextAlign.CENTER}
          />
        </div>
      );
    }

    return (
      <div
        className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        data-testid="ArticleList"
      >
        {articles.length && !isLoading
          ? articles.map((article: Article) => (
              <ArticleListItem
                target={target}
                key={article.id}
                article={article}
                view={view}
                className={cls.card}
              />
            ))
          : ''}
        {isLoading && getSkeletons(view)}
      </div>
    );
  },
);
