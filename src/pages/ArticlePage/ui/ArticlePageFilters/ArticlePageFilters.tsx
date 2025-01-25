import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card, HStack, Input } from '@/shared/ui';
import cls from './ArticlePageFilters.module.scss';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface ArticlePageFiltersProps {
  className?: string;
}

export const ArticlePageFilters = memo(
  (props: PropsWithChildren<ArticlePageFiltersProps>) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      view,
      sort,
      order,
      type,
      onChangeView,
      onChangeSort,
      onChangeOrder,
      onChangeType,
      onChangeSearch,
    } = useArticleFilters();

    return (
      <div className={classNames('', {}, [className])}>
        <HStack justify="between">
          <ArticleSortSelector
            sort={sort}
            order={order}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
          />
          <ArticleViewSelector
            view={view}
            onViewClick={onChangeView}
          />
          {/* <ViewSelectorContainer/> */}
        </HStack>
        <ArticleTypeTabs
          value={type}
          onChangeType={onChangeType}
          className={cls.tabs}
        />
        <Card className={cls.search}>
          <Input
            placeholder={t('Поиск')}
            onChange={onChangeSearch}
          />
        </Card>
      </div>
    );
  },
);
