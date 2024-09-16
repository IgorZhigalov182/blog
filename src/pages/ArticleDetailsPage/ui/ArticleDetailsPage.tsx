import type { PropsWithChildren } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
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

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  if (!id) {
    return <div className={classNames(cls.articleDetailsPage, {}, [className])}>{t('Статья не найдена')}</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.articleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text className={cls.articleDetailsTitle} title={t('Комментарии')} />
        <CommentList isLoading={isLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default ArticleDetailsPage;
