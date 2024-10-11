import { EntityState } from '@reduxjs/toolkit';
import { Article } from 'entities/Article';
import { ArticleSortField, ArticleType, ArticleView } from 'entities/Article/model/types/article';
import { SortOrder } from 'shared/types/SortOrder';

export interface ArticlePageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view?: ArticleView;

  page: number;
  limit: number;
  hasMore: boolean;

  views: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;
}
