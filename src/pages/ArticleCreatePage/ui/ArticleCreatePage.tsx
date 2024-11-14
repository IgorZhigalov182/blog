import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import cls from './ArticleCreatePage.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface ArticleCreatePageProps {
  className?: string;
}

const ArticleCreatePage = memo((props: PropsWithChildren<ArticleCreatePageProps>) => {
  const { className } = props;
  const { t } = useTranslation();

  return <div className={classNames(cls.ArticleCreatePage, {}, [className])}>{t('CREATE PAGE')}</div>;
});

export default ArticleCreatePage;
