import { StateSchema } from 'app/providers/StoreProvider';
import { ArticleView } from 'entities/Article/model/types/article';

export const getArticlePageIsLoading = (state: StateSchema) => state?.articlesPage?.isLoading || false;
export const getArticlePageIsError = (state: StateSchema) => state?.articlesPage?.error;
export const getArticlePageView = (state: StateSchema) => state?.articlesPage?.view || ArticleView.GRID;
export const getArticlePageLimit = (state: StateSchema) => state?.articlesPage?.limit || 9;
export const getArticlePageHasMore = (state: StateSchema) => state?.articlesPage?.hasMore;
export const getArticlePageNum = (state: StateSchema) => state?.articlesPage?.page || 1;
