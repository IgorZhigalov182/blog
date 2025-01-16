import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleCreatePageProps {
  className?: string;
}

const ArticleCreatePage = memo(
  (props: PropsWithChildren<ArticleCreatePageProps>) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
      <div className={classNames('', {}, [className])}>{t('CREATE PAGE')}</div>
    );
  },
);

export default ArticleCreatePage;
