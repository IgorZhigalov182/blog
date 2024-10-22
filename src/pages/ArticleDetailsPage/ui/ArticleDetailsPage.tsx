import { ArticleDetails } from 'entities/Article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { CommentList } from 'entities/Comment';
import { AddCommentForm } from 'features/addCommentForm';
import { useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Text } from 'shared/ui/Text/Text';
import { Page } from 'widgets/Page/ui/Page';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { getArticleRecommendationsError } from '../model/selectors/recommendations';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { fetchArticleRecommendations } from '../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsCommentSlice';
import {
  articleDetailsRecommedationsReducer,
  getArticleRecommendations,
} from '../model/slices/articleDetailsPageRecommedations';
import cls from './ArticleDetailsPage.module.scss';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { VStack } from 'shared/ui/Stack';

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
  const dispatch = useDispatch();
  const comments = useSelector(getArticleComments.selectAll);
  const recommendations = useSelector(getArticleRecommendations.selectAll);
  const isErrorRecommendations = useSelector(getArticleRecommendationsError);
  const isLoadingRecommendations = useSelector(getArticleCommentsIsLoading);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
    dispatch(fetchArticleRecommendations());
  });

  if (!id) {
    return <Page className={classNames(cls.articleDetailsPage, {}, [className])}>{t('Статья не найдена')}</Page>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text className={cls.articleDetailsTitle} title={t('Рекомендуем')} />
        <ArticleList
          target="_blank"
          className={cls.recommendations}
          articles={recommendations}
          isLoading={isLoadingRecommendations}
        />
        <Text className={cls.articleDetailsTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={isLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
