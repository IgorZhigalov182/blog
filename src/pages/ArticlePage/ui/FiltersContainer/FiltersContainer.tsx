import { memo, type PropsWithChildren } from 'react';
import { ArticlesFilters } from '@/widgets/ArticlesFilters';
import { useArticleFilters } from '../../lib/hooks/useArticleFilters';

interface FiltersContainerProps {
  className?: string;
}

export const FiltersContainer = memo(
  (props: PropsWithChildren<FiltersContainerProps>) => {
    const { className } = props;

    const {
      sort,
      search,
      order,
      type,
      onChangeSort,
      onChangeOrder,
      onChangeType,
      onChangeSearch,
    } = useArticleFilters();

    return (
      <ArticlesFilters
        sort={sort}
        order={order}
        onChangeOrder={onChangeOrder}
        onChangeSort={onChangeSort}
        type={type}
        onChangeType={onChangeType}
        onChangeSearch={onChangeSearch}
        search={search}
        className={className}
      />
    );
  },
);
