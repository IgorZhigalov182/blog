import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { Card } from '@/shared/ui';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { getArticleDetailsData } from '@/entities/Comment';
import cls from './AdditionalInfoContainer.module.scss';
import { getRouteArticleEdit } from '@/shared/const/router';

export const AdditionalInfoContainer = () => {
  const { id } = useParams<{ id: string }>();
  const article = useSelector(getArticleDetailsData);
  const navigate = useNavigate();

  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article?.id));
    }
  }, [article, navigate]);

  if (!article) {
    return null;
  }

  return (
    <Card
      padding="24"
      border="partial"
      className={cls.card}
    >
      <ArticleAdditionalInfo
        createdAt={article.createdAt}
        author={article.user}
        views={article.views}
        onEdit={onEditArticle}
      />
    </Card>
  );
};
