import { memo, type PropsWithChildren } from 'react';
import ArticlesGridDeprecated from '@/shared/assets/icons/ArticlesGrid.svg';
import ArticlesListDeprecated from '@/shared/assets/icons/ArticlesList.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  ButtonDeprecated,
  ThemeButton,
  Icon as IconDeprecated,
  Card,
  HStack,
  Icon,
} from '@/shared/ui';
import ArticlesList from '@/shared/assets/icons/burger.svg';
import ArticlesGrid from '@/shared/assets/icons/tile.svg';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '@/entities/Article';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (newView: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ArticlesList,
      off: () => ArticlesListDeprecated,
    }),
  },
  {
    view: ArticleView.GRID,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      on: () => ArticlesGrid,
      off: () => ArticlesGridDeprecated,
    }),
  },
];

export const ArticleViewSelector = memo(
  (props: PropsWithChildren<ArticleViewSelectorProps>) => {
    const { className, view, onViewClick } = props;

    const onClick = (newView: ArticleView) => () => {
      onViewClick?.(newView);
    };

    return (
      <ToggleFeatures
        feature="isAppRedesigned"
        off={
          <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
            {viewTypes.map((viewType) => (
              <ButtonDeprecated
                theme={ThemeButton.CLEAR}
                key={viewType.view}
                onClick={onClick(viewType.view)}
              >
                <IconDeprecated
                  width={24}
                  height={24}
                  Svg={viewType.icon}
                  className={classNames('', {
                    [cls.selected]: viewType.view === view,
                  })}
                />
              </ButtonDeprecated>
            ))}
          </div>
        }
        on={
          <Card
            padding="8"
            border="round"
            className={classNames(cls.ArticleViewSelectorRedesigned, {}, [
              className,
            ])}
          >
            <HStack gap="8">
              {viewTypes.map((viewType) => (
                <Icon
                  clickable
                  key={viewType.view}
                  onClick={onClick(viewType.view)}
                  Svg={viewType.icon}
                  className={classNames('', {
                    [cls.notSelected]: viewType.view !== view,
                  })}
                />
              ))}
            </HStack>
          </Card>
        }
      />
    );
  },
);
