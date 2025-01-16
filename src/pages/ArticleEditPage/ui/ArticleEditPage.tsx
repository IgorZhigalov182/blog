import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = memo(
  (props: PropsWithChildren<ArticleEditPageProps>) => {
    const { className } = props;
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const isArticleExist = Boolean(id);

    return (
      <div className={classNames('', {}, [className])}>
        {isArticleExist ? t('Редактирование статьи') : t('Создание статьи')}
      </div>
    );
  },
);

export default ArticleEditPage;
