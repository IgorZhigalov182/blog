import { HTMLAttributeAnchorTarget, memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import EyeIcon from '@/shared/assets/icons/EyeIcon.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage, Avatar, Card, Icon, Skeleton, Text } from '@/shared/ui';
import { Button, ThemeButton } from '@/shared/ui/deprecated/Button/Button';
import {
  ArticleBlockType,
  ArticleView,
} from '../../model/contst/articleConsts';
import { Article, ArticleTextBlock } from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleListItem.module.scss';
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink';

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(
  (props: PropsWithChildren<ArticleListItemProps>) => {
    const { className, article, view, target } = props;
    const { createdAt, title, type, views, img, user, blocks, id } = article;
    const { t } = useTranslation('articles');

    const types = (
      <Text
        text={type.join(', ')}
        className={cls.types}
      />
    );

    const viewsCount = (
      <>
        <Text
          text={String(views)}
          className={cls.views}
        />
        <Icon Svg={EyeIcon} />
      </>
    );

    if (view === ArticleView.LIST) {
      const textBlock = blocks.find(
        ({ type }) => type === ArticleBlockType.TEXT,
      ) as ArticleTextBlock;

      return (
        <div
          className={classNames('', {}, [className, cls[view]])}
          data-testid="ArticleListItem"
        >
          <Card className={cls.card}>
            <div className={cls.header}>
              <Avatar
                size={30}
                src={user.avatar}
                className={cls.avatar}
              />
              <Text
                text={user.username}
                className={cls.username}
              />
              <Text
                text={createdAt}
                className={cls.date}
              />
            </div>
            <Text
              title={title}
              className={cls.title}
            />
            {types}
            <AppImage
              fallback={
                <Skeleton
                  width="100%"
                  height={250}
                />
              }
              src={img}
              className={cls.image}
              alt={title}
            />
            {textBlock && (
              <ArticleTextBlockComponent
                block={textBlock}
                className={cls.textBlock}
              />
            )}
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
        data-testid="ArticleListItem"
        target={target}
        to={getRouteArticleDetails(id)}
        className={classNames('', {}, [className, cls[view]])}
      >
        <Card className={cls.card}>
          <div className={cls.imageWrapper}>
            <AppImage
              fallback={
                <Skeleton
                  width={200}
                  height={200}
                />
              }
              src={img}
              className={cls.image}
              alt={title}
            />
            <Text
              text={createdAt}
              className={cls.date}
            />
          </div>
          <div className={cls.infoWrapper}>
            {types}
            {viewsCount}
          </div>
          <Text
            text={title}
            className={cls.title}
          />
        </Card>
      </AppLink>
    );
  },
);
