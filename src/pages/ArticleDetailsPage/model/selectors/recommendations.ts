import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationsIsLoading = (state: StateSchema) => state.articleDetailsRecommedations?.isLoading;
export const getArticleRecommendationsError = (state: StateSchema) => state.articleDetailsRecommedations?.error;
