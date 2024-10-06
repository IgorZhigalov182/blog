import { useCallback, type PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CommentList } from 'entities/Comment';
import cls from './ArticleDetailsPage.module.scss';
import { Text } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, getArticleComments } from '../model/slices/articleDetailsCommentSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getArticleCommentsIsLoading } from '../model/selectors/comments';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import { AddCommentForm } from 'features/addCommentForm';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'shared/ui/Page/ui/Page';

const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
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
  const isLoading = useSelector(getArticleCommentsIsLoading);
  const navigate = useNavigate();

  const onSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, []);

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return <Page className={classNames(cls.articleDetailsPage, {}, [className])}>{t('Статья не найдена')}</Page>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
        <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
          {t('Назад к списку')}
        </Button>
        <ArticleDetails id={id} />
        <Text className={cls.articleDetailsTitle} title={t('Комментарии')} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={isLoading} comments={comments} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
