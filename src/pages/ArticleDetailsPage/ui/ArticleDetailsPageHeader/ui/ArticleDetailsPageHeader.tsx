import { memo, useCallback, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCanEditArticle } from '../../../model/selectors/getCanEditArticle';
import { Button, ThemeButton, HStack } from '@/shared/ui';

import { RoutePath } from '@/shared/const/router';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = memo((props: PropsWithChildren<ArticleDetailsPageHeaderProps>) => {
  const { className } = props;
  const { t } = useTranslation();
  const isCanEdit = useSelector(getCanEditArticle);
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles);
  }, [id, navigate]);

  const onEdit = useCallback(() => {
    navigate(`${RoutePath.articles + id}/edit`);
  }, [id, navigate]);

  return (
    <HStack justify="between">
      <Button theme={ThemeButton.OUTLINE} onClick={onBackToList}>
        {t('Назад к списку')}
      </Button>
      {isCanEdit && (
        <Button theme={ThemeButton.OUTLINE} onClick={onEdit}>
          {t('Редактировать')}
        </Button>
      )}
    </HStack>
  );
});
