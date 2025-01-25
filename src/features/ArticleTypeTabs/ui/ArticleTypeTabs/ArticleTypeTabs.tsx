import { memo, useCallback, useMemo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { TabItem, Tabs, TabsDeprecated } from '@/shared/ui';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleTypeTabsProps {
  className?: string;
  value: ArticleType;
  onChangeType: (type: ArticleType) => void;
}

export const ArticleTypeTabs = memo(
  (props: PropsWithChildren<ArticleTypeTabsProps>) => {
    const { className, value, onChangeType } = props;
    const { t } = useTranslation();

    const tabs = useMemo<TabItem[]>(
      () => [
        {
          value: ArticleType.ALL,
          content: t('Всё'),
        },
        {
          value: ArticleType.IT,
          content: t('IT'),
        },
        {
          value: ArticleType.ECONOMICS,
          content: t('Экономика'),
        },
        {
          value: ArticleType.SCIENCE,
          content: t('Наука'),
        },
      ],
      [],
    );

    const onTabClick = useCallback((tab: TabItem) => {
      onChangeType(tab.value as ArticleType);
    }, []);

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <TabsDeprecated
            onTabClick={onTabClick}
            tabs={tabs}
            value={value}
            className={classNames('', {}, [className])}
          />
        }
        on={
          <Tabs
            direction="column"
            onTabClick={onTabClick}
            tabs={tabs}
            value={value}
            className={classNames('', {}, [className])}
          />
        }
      />
    );
  },
);
