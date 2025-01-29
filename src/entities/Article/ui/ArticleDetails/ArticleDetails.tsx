import { memo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import CalendarIcon from '@/shared/assets/icons/CalendarIcon.svg';
import EyeIcon from '@/shared/assets/icons/EyeIcon.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {
  HStack,
  TextDeprecated,
  TextAlign,
  TextSize,
  VStack,
  AvatarDeprecated,
  IconDeprecated,
  SkeletonDeprecated,
  Text,
  AppImage,
  Skeleton as SkeletonRedesigned,
} from '@/shared/ui';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import cls from './ArticleDetails.module.scss';
import { toggleFeatures, ToggleFeatures } from '@/shared/lib/features';
import { renderBlock } from './renderBlock';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const Deprecated = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <HStack justify="center">
        <AvatarDeprecated
          size={200}
          src={article?.img}
          className={cls.avatar}
        />
      </HStack>
      <VStack
        gap="4"
        max
        data-testid="ArticleDetails.Info"
      >
        <TextDeprecated
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
          className={cls.title}
        />
        <HStack gap="8">
          <IconDeprecated Svg={EyeIcon} />
          <TextDeprecated text={String(article?.views)} />
        </HStack>
        <HStack gap="8">
          <IconDeprecated Svg={CalendarIcon} />
          <TextDeprecated text={article?.createdAt} />
        </HStack>
        {article?.blocks?.map(renderBlock)}
      </VStack>
    </>
  );
};
const Redesigned = () => {
  const article = useSelector(getArticleDetailsData);

  return (
    <>
      <Text
        title={article?.title}
        size="l"
        bold
      />
      <Text
        text={article?.subtitle}
        size="m"
      />
      <AppImage
        className={cls.img}
        src={article?.img}
        fallback={
          <SkeletonRedesigned
            width="100%"
            height={420}
            border="16"
          />
        }
      />
      {article?.blocks?.map(renderBlock)}
    </>
  );
};

export const ArticleDetailsSkeleton = () => {
  const Skeleton = toggleFeatures({
    name: 'isAppRedesigned',
    off: () => SkeletonDeprecated,
    on: () => SkeletonRedesigned,
  });

  return (
    <VStack
      gap="16"
      max
    >
      <Skeleton
        className={cls.avatar}
        height={200}
        width={200}
        border="50%"
      />
      <Skeleton
        className={cls.title}
        width={300}
        height={32}
      />
      <Skeleton
        className={cls.skeleton}
        width={600}
        height={24}
      />
      <Skeleton
        className={cls.skeleton}
        width="100%"
        height={200}
      />
      <Skeleton
        className={cls.skeleton}
        width="100%"
        height={200}
      />
    </VStack>
  );
};

export const ArticleDetails = memo(
  (props: PropsWithChildren<ArticleDetailsProps>) => {
    const { className, id } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);

    useInitialEffect(() => {
      dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
      content = <ArticleDetailsSkeleton />;
    } else if (error) {
      content = (
        <ToggleFeatures
          feature="isAppRedesigned"
          off={
            <TextDeprecated
              align={TextAlign.CENTER}
              title={t('Произошла ошибка при загрузке страницы')}
            />
          }
          on={
            <Text
              align="center"
              title={t('Произошла ошибка при загрузке страницы')}
            />
          }
        />
      );
    } else {
      content = (
        <ToggleFeatures
          feature="isAppRedesigned"
          off={<Deprecated />}
          on={<Redesigned />}
        />
      );
    }

    return (
      <DynamicModuleLoader
        reducers={reducers}
        removeAfterUnmount
      >
        <div className={classNames(cls.ArticleDetails, {}, [className])}>
          {content}
        </div>
      </DynamicModuleLoader>
    );
  },
);
