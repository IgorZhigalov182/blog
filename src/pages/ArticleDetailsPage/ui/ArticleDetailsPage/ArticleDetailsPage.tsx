import { memo } from 'react';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRaiting } from '@/features/ArticleRaiting';
import { ArticleRecommendationList } from '@/features/ArticleRecommendationList';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getFeatureFlags } from '@/shared/lib/features';
import { VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slices';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleDetailsPageHeader } from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
  const { className } = props;
  const { id } = useParams<{ id: string }>();

  const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled');
  const isCounterEnabled = getFeatureFlags('isCounterEnabled');

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader
      reducers={reducers}
      removeAfterUnmount
    >
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <VStack
          gap="16"
          max
        >
          <ArticleDetailsPageHeader />
          <ArticleDetails id={id} />
          {isCounterEnabled && '<h1>Counter</h1>'}
          {isArticleRatingEnabled && <ArticleRaiting articleId={id} />}
          <ArticleRecommendationList />
          <ArticleDetailsComments id={id} />
        </VStack>
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
