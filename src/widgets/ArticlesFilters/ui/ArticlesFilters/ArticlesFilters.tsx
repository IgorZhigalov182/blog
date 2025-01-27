import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Card, Input, VStack } from '@/shared/ui';
import { classNames } from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types/SortOrder';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { Icon } from '@/shared/ui/redesigned';

interface ArticlesFiltersProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  type: ArticleType;
  search: string;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
  onChangeType: (type: ArticleType) => void;
  onChangeSearch: (newSearch: string) => void;
}

export const ArticlesFilters = memo(
  (props: PropsWithChildren<ArticlesFiltersProps>) => {
    const {
      className,
      sort,
      order,
      onChangeOrder,
      onChangeSort,
      onChangeType,
      onChangeSearch,
      type,
      search,
    } = props;
    const { t } = useTranslation();

    return (
      <Card
        padding="24"
        className={classNames(cls.ArticlesFilters, {}, [className])}
      >
        <VStack gap="32">
          <Input
            size="s"
            addonLeft={<Icon Svg={SearchIcon} />}
            placeholder={t('Поиск')}
            value={search}
            onChange={onChangeSearch}
          />
          <ArticleTypeTabs
            value={type}
            onChangeType={onChangeType}
            className={cls.tabs}
          />
          <ArticleSortSelector
            sort={sort}
            order={order}
            onChangeSort={onChangeSort}
            onChangeOrder={onChangeOrder}
          />
        </VStack>
      </Card>
    );
  },
);
