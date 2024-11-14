import { Raiting } from '@/entities/Raiting';
import { rtkApi } from '@/shared/api/rtkApi';

interface GetArticleRatingArg {
  articleId: string;
  userId: string;
}

interface RateArticle {
  articleId: string;
  userId: string;
  rate: number;
  feedback?: string;
}

const articleRaitingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRaiting: build.query<Raiting[], GetArticleRatingArg>({
      query: ({ articleId, userId }) => ({
        url: '/article-ratings',
        params: {
          articleId,
          userId,
        },
      }),
    }),

    rateArticle: build.mutation<void, RateArticle>({
      query: (arg) => ({
        url: '/article-ratings',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const { useGetArticleRaitingQuery } = articleRaitingApi;
export const { useRateArticleMutation } = articleRaitingApi;
