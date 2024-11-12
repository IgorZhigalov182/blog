import { memo, type PropsWithChildren } from 'react';
import ArticlesGrid from '@/shared/assets/icons/ArticlesGrid.svg';
import ArticlesList from '@/shared/assets/icons/ArticlesList.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import cls from './ArticleViewSelector.module.scss';
import { ArticleView } from '../../model/contst/articleConsts';

interface ArticleViewSelectorProps {
  className?: string;
  view: ArticleView;
  onViewClick?: (newView: ArticleView) => void;
}

const viewTypes = [
  {
    view: ArticleView.LIST,
    icon: ArticlesList,
  },
  {
    view: ArticleView.GRID,
    icon: ArticlesGrid,
  },
];

export const ArticleViewSelector = memo((props: PropsWithChildren<ArticleViewSelectorProps>) => {
  const { className, view, onViewClick } = props;

  const onClick = (newView: ArticleView) => () => {
    onViewClick?.(newView);
  };

  return (
    <div className={classNames(cls.ArticleViewSelector, {}, [className])}>
      {viewTypes.map(viewType => (
        <Button theme={ThemeButton.CLEAR} key={viewType.view} onClick={onClick(viewType.view)}>
          <Icon Svg={viewType.icon} className={classNames('', { [cls.selected]: viewType.view === view })} />
        </Button>
      ))}
    </div>
  );
});
