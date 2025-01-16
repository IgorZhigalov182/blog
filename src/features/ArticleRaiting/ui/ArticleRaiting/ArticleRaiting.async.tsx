import { lazy, Suspense } from 'react';
import { Skeleton } from '@/shared/ui';
import { ArticleRaitingProps } from './ArticleRaiting';

export const ArticleRaitingLazy = lazy(() => import('./ArticleRaiting'));

export const ArticleRaitingAsync = (props: ArticleRaitingProps) => (
  <Suspense
    fallback={
      <Skeleton
        width="100%"
        height={120}
      />
    }
  >
    <ArticleRaitingLazy {...props} />
  </Suspense>
);
