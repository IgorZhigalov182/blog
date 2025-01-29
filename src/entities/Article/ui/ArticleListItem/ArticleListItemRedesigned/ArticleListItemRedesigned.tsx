import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { getRouteArticleDetails } from '@/shared/const/router';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  AppImage,
  Avatar,
  Card,
  HStack,
  Icon,
  Skeleton,
  Text,
  VStack,
  Button,
} from '@/shared/ui';
import cls from './ArticleListItemRedesigned.module.scss';
import { AppLink } from '@/shared/ui/redesigned/AppLink/AppLink';
import { ArticleListItemProps } from '../ArticleListItem';
import {
  ArticleBlockType,
  ArticleView,
} from '../../../model/contst/articleConsts';
import { ArticleTextBlock } from '../../../model/types/article';

export const ArticleListItemRedesigned = memo(
  (props: PropsWithChildren<ArticleListItemProps>) => {
    const { className, article, view, target } = props;
    const { createdAt, title, type, views, img, user, blocks, id, subtitle } =
      article;
    const { t } = useTranslation('articles');

    const userInfo = (
      <>
        <Avatar
          size={32}
          src={user.avatar}
        />
        <Text
          bold
          text={user.username}
        />
      </>
    );

    const viewsCount = (
      <HStack gap="8">
        <Icon
          className={cls.icon}
          Svg={EyeIcon}
        />
        <Text
          text={String(views)}
          className={cls.views}
        />
      </HStack>
    );

    if (view === ArticleView.LIST) {
      const textBlock = blocks.find(
        ({ type }) => type === ArticleBlockType.TEXT,
      ) as ArticleTextBlock;

      return (
        <Card
          className={classNames(cls.card, {}, [className, cls[view]])}
          data-testid="ArticleListItem"
          max
          padding="24"
        >
          <VStack gap="16">
            <HStack gap="8">
              {userInfo}
              <Text
                text={createdAt}
                className={cls.date}
              />
            </HStack>
            <Text
              title={title}
              className={cls.title}
              bold
            />
            <Text
              title={subtitle}
              className={cls.title}
              size="s"
              bold
            />
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
            {textBlock?.paragraphs && (
              <Text
                text={textBlock.paragraphs.slice(0, 2).join(' ')}
                className={cls.paragraphs}
              />
            )}
            <HStack
              max
              justify="between"
            >
              <AppLink
                target={target}
                to={getRouteArticleDetails(id)}
              >
                <Button variant="outline">{t('Читать далее')}</Button>
              </AppLink>
              {viewsCount}
            </HStack>
          </VStack>
        </Card>
      );
    }

    return (
      <AppLink
        data-testid="ArticleListItem"
        target={target}
        to={getRouteArticleDetails(id)}
        className={classNames('', {}, [className, cls[view]])}
      >
        <Card
          className={cls.card}
          border="partial"
          padding="0"
        >
          <AppImage
            fallback={
              <Skeleton
                width="100%"
                height={200}
              />
            }
            src={img}
            className={cls.image}
            alt={title}
          />
          <VStack
            className={cls.info}
            gap="4"
          >
            <Text
              text={title}
              className={cls.title}
            />
            <VStack
              gap="4"
              className={cls.footer}
              max
            >
              <HStack
                max
                justify="between"
              >
                <Text
                  text={createdAt}
                  className={cls.date}
                />
                {viewsCount}
              </HStack>
              <HStack
                gap="8"
                className={cls.avatar}
              >
                {userInfo}
              </HStack>
            </VStack>
          </VStack>
        </Card>
      </AppLink>
    );
  },
);
