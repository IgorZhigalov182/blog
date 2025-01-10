import { HTMLAttributeAnchorTarget, memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import EyeIcon from '@/shared/assets/icons/EyeIcon.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Button, ThemeButton } from '@/shared/ui/Button/Button';
import { Icon } from '@/shared/ui/Icon/Icon';
import { Text } from '@/shared/ui/Text/Text';
import { ArticleBlockType, ArticleView } from '../../model/contst/articleConsts';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: PropsWithChildren<ArticleListItemProps>) => {
  const { className, article, view, target } = props;
  const { createdAt, title, type, views, img, user, blocks, id } = article;
  const { t } = useTranslation('articles');
  const navigate = useNavigate();

  const types = <Text text={type.join(', ')} className={cls.types} />;

  const viewsCount = (
    <>
      <Text text={String(views)} className={cls.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.LIST) {
    const textBlock = blocks.find(({ type }) => type === ArticleBlockType.TEXT) as ArticleTextBlock;

    return (
      <div className={classNames('', {}, [className, cls[view]])}>
        <Card className={cls.card}>
          <div className={cls.header}>
            <Avatar size={30} src={user.avatar} className={cls.avatar} />
            <Text text={user.username} className={cls.username} />
            <Text text={createdAt} className={cls.date} />
          </div>
          <Text title={title} className={cls.title} />
          {types}
          <img src={img} className={cls.image} alt={title} />
          {textBlock && <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />}
          <div className={cls.footer}>
            <AppLink to={getRouteArticleDetails(id)}>
              <Button theme={ThemeButton.OUTLINE}>{t('Читать далее')}</Button>
            </AppLink>
            {viewsCount}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={getRouteArticleDetails(id)}
      className={classNames('', {}, [className, cls[view]])}>
      <Card className={cls.card}>
        <div className={cls.imageWrapper}>
          <img className={cls.image} src={img} alt={title} />
          <Text text={createdAt} className={cls.date} />
        </div>
        <div className={cls.infoWrapper}>
          {types}
          {viewsCount}
        </div>
        <Text text={title} className={cls.title} />
      </Card>
    </AppLink>
  );
});
