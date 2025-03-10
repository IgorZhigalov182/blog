import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  CardDeprecated,
  Card as CardRedesigned,
  SkeletonDeprecated,
  Skeleton as SkeletonRedesigned,
} from '@/shared/ui';

import cls from './ArticleListItem.module.scss';
import { ArticleView } from '../../model/contst/articleConsts';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticleView;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const mainClass = toggleFeatures({
      name: 'isAppRedesigned',
      off: () => cls.ArticleListItem,
      on: () => cls.ArticleListItemRedesigned,
    });

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      off: () => SkeletonDeprecated,
      on: () => SkeletonRedesigned,
    });

    // const Card = toggleFeatures({
    //   name: 'isAppRedesigned',
    //   off: () => CardDeprecated,
    //   on: () => CardRedesigned,
    // });

    if (view === ArticleView.LIST) {
      const cardContent = (
        <div className={cls.cardSkeleton}>
          <div className={cls.header}>
            <Skeleton
              border="50%"
              height={30}
              width={30}
            />
            <Skeleton
              width={150}
              height={16}
              className={cls.username}
            />
            <Skeleton
              width={150}
              height={16}
              className={cls.date}
            />
          </div>
          <Skeleton
            width={250}
            height={24}
            className={cls.title}
          />
          <Skeleton
            height={200}
            className={cls.image}
          />
          <div className={cls.footer}>
            <Skeleton
              height={36}
              width={200}
            />
          </div>
        </div>
      );

      return (
        <div className={classNames(mainClass, {}, [className, cls[view]])}>
          <ToggleFeatures
            feature="isAppRedesigned"
            off={
              <CardDeprecated className={cls.card}>
                {cardContent}
              </CardDeprecated>
            }
            on={
              <CardRedesigned
                border="round"
                className={cls.card}
              >
                {cardContent}
              </CardRedesigned>
            }
          />
        </div>
      );
    }

    const cardContent = (
      <>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Skeleton
              width="100%"
              height={150}
              border="32px"
              className={cls.image}
            />
          }
          off={
            <div className={cls.imageWrapper}>
              <Skeleton
                width={200}
                height={200}
                className={cls.image}
              />
            </div>
          }
        />
        <div className={cls.infoWrapper}>
          <Skeleton
            width={130}
            height={16}
          />
        </div>
        <Skeleton
          width={150}
          height={16}
          className={cls.title}
        />
      </>
    );

    return (
      <div className={classNames(mainClass, {}, [className, cls[view]])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          off={
            <CardDeprecated className={cls.card}>{cardContent}</CardDeprecated>
          }
          on={
            <CardRedesigned
              border="round"
              className={cls.card}
            >
              {cardContent}
            </CardRedesigned>
          }
        />
      </div>
    );
  },
);
