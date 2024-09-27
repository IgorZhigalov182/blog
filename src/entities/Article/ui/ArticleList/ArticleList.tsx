import { memo, ReactNode, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const renderArticles = () =>
    articles.map((article: Article) => (
      <ArticleListItem key={article.id} article={article} view={view} className={cls.card} />
    ));

  if (isLoading) {
    return <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>{getSkeletons(view)}</div>;
  }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length ? articles.map(renderArticles) : 'No articles'}
    </div>
  );
});
