import { memo, useCallback, type PropsWithChildren } from 'react';
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
  Avatar,
  HStack,
  Icon,
  Skeleton,
  Text,
  TextAlign,
  TextSize,
  VStack,
} from '@/shared/ui';
import { ArticleBlockType } from '../../model/contst/articleConsts';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { ArticleBlock } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
  className?: string;
  id?: string;
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo(
  (props: PropsWithChildren<ArticleDetailsProps>) => {
    const { className, id } = props;
    const { t } = useTranslation('articles');
    const dispatch = useAppDispatch();
    const isLoading = useSelector(getArticleDetailsIsLoading);
    const error = useSelector(getArticleDetailsError);
    const article = useSelector(getArticleDetailsData);

    const renderBlock = useCallback((block: ArticleBlock) => {
      switch (block.type) {
        case ArticleBlockType.CODE:
          return (
            <ArticleCodeBlockComponent
              block={block}
              className={cls.block}
              key={block.id}
            />
          );
        case ArticleBlockType.TEXT:
          return (
            <ArticleTextBlockComponent
              block={block}
              className={cls.block}
              key={block.id}
            />
          );
        case ArticleBlockType.IMAGE:
          return (
            <ArticleImageBlockComponent
              block={block}
              className={cls.block}
              key={block.id}
            />
          );
        default:
          return null;
      }
    }, []);

    useInitialEffect(() => {
      dispatch(fetchArticleById(id));
    });

    let content;

    if (isLoading) {
      content = (
        <>
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
        </>
      );
    } else if (error) {
      content = (
        <Text
          align={TextAlign.CENTER}
          title={t('Произошла ошибка при загрузке страницы')}
        />
      );
    } else {
      content = (
        <>
          <HStack justify="center">
            <Avatar
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
            <Text
              title={article?.title}
              text={article?.subtitle}
              size={TextSize.L}
              className={cls.title}
            />
            <HStack gap="8">
              <Icon Svg={EyeIcon} />
              <Text text={String(article?.views)} />
            </HStack>
            <HStack gap="8">
              <Icon Svg={CalendarIcon} />
              <Text text={article?.createdAt} />
            </HStack>
            {article?.blocks?.map(renderBlock)}
          </VStack>
        </>
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
