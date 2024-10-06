import { memo, ReactNode, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  view?: ArticleView;
  isLoading?: boolean;
}

const getSkeletons = (view: ArticleView): ReactNode => {
  return new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((_, index) => <ArticleListItemSkeleton view={view} key={index} className={cls.card} />);
};

export const ArticleList = memo((props: PropsWithChildren<ArticleListProps>) => {
  const { className, articles, view = ArticleView.GRID, isLoading } = props;

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length
        ? articles.map((article: Article) => (
            <ArticleListItem key={article.id} article={article} view={view} className={cls.card} />
          ))
        : ''}
      {isLoading && getSkeletons(view)}
    </div>
  );
});
