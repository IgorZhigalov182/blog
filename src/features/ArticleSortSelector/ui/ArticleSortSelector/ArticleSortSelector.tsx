import { memo, useMemo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/SortOrder';
import { Select, SelectOption, HStack } from '@/shared/ui';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';

interface ArticleSortSelectorProps {
  className?: string;
  sort: ArticleSortField;
  order: SortOrder;
  onChangeOrder: (newOrder: SortOrder) => void;
  onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(
  (props: PropsWithChildren<ArticleSortSelectorProps>) => {
    const { className, sort, order, onChangeOrder, onChangeSort } = props;
    const { t } = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(
      () => [
        {
          value: 'asc',
          content: t('возрастанию'),
        },
        {
          value: 'desc',
          content: t('убыванию'),
        },
      ],
      [],
    );

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(
      () => [
        {
          value: ArticleSortField.CREATED,
          content: t('дате создания'),
        },
        {
          value: ArticleSortField.TITLE,
          content: t('заголовку'),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t('количеству просмотров'),
        },
      ],
      [],
    );

    return (
      <HStack
        gap="8"
        className={classNames(cls.ArticleSortSelector, {}, [className])}
      >
        <Select<ArticleSortField>
          onChange={onChangeSort}
          label={t('Сортировать по')}
          options={sortOptions}
          value={sort}
        />
        <Select<SortOrder>
          onChange={onChangeOrder}
          label={t('по')}
          options={orderOptions}
          value={order}
        />
      </HStack>
    );
  },
);
