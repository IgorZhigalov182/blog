import { type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleRecommendationList } from '@/features/ArticleRecommendationList';
import { ArticleDetails } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer } from '../model/slices/articleDetailsCommentSlice';
import { articleDetailsRecommedationsReducer } from '../model/slices/articleDetailsPageRecommedations';
import { ArticleDetailsComment } from './ArticleDetailsComments/ArticleDetailsComment';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { ArticleRaiting } from '@/features/ArticleRaiting';
import { Page } from '@/widgets/Page';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
  articleDetailsRecommedations: articleDetailsRecommedationsReducer,
};

interface ArticleDetailsPageProps {
  className?: string;
}

const ArticleDetailsPage = (props: PropsWithChildren<ArticleDetailsPageProps>) => {
  const { className } = props;
  const { t } = useTranslation('article');
  const { id } = useParams<{ id: string | undefined }>();

  if (!id) {
    return null;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <ArticleRaiting articleId={id} />
        <ArticleRecommendationList />
        <ArticleDetailsComment id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
