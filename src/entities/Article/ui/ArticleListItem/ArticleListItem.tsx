import { HTMLAttributeAnchorTarget, memo, type PropsWithChildren } from 'react';
import { ArticleView } from '../../model/contst/articleConsts';
import { Article } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(
  (props: PropsWithChildren<ArticleListItemProps>) => {
    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={<ArticleListItemDeprecated {...props} />}
        on={<ArticleListItemRedesigned {...props} />}
      />
    );
  },
);
