import { memo, useMemo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { SortOrder } from '@/shared/types/SortOrder';
import { Select, SelectOption, HStack, VStack, Text } from '@/shared/ui';
import cls from './ArticleSortSelector.module.scss';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';
import { ListBox } from '@/shared/ui/redesigned/Popups/ui/ListBox/ListBox';

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
          content: t('Возрастанию'),
        },
        {
          value: 'desc',
          content: t('Убыванию'),
        },
      ],
      [],
    );

    const sortOptions = useMemo<SelectOption<ArticleSortField>[]>(
      () => [
        {
          value: ArticleSortField.CREATED,
          content: t('Дате создания'),
        },
        {
          value: ArticleSortField.TITLE,
          content: t('Заголовку'),
        },
        {
          value: ArticleSortField.VIEWS,
          content: t('Количеству просмотров'),
        },
      ],
      [],
    );

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
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
        }
        on={
          <HStack
            gap="8"
            className={classNames(cls.ArticleSortSelectorRedesigned, {}, [
              className,
            ])}
          >
            <VStack gap="8">
              <Text text={t('Сортировать по')} />
              <ListBox
                onChange={onChangeSort}
                items={sortOptions}
                value={sort}
              />
              <ListBox
                onChange={onChangeOrder}
                items={orderOptions}
                value={order}
              />
            </VStack>
          </HStack>
        }
      />
    );
  },
);
