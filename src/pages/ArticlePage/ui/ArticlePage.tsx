import { ArticleViewSelector } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { PropsWithChildren, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { Page } from 'shared/ui/Page/ui/Page';
import {
  getArticlePageIsError,
  getArticlePageIsLoading,
  getArticlePageView,
} from '../model/selectors/articlePageSelectors';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
import { fetchNextArticlePage } from '../model/services/fetchNextArticlePage/fetchNextArticlePage';
import { articlePageActions, articlePageReducer, getArticles } from '../model/slice/articlePageSlice';
import cls from './ArticlePage.module.scss';

interface ArticleDetailsPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlePageReducer,
};

const ArticlePage = (props: PropsWithChildren<ArticleDetailsPageProps>) => {
  const { className } = props;
  const dispatch = useAppDispatch();
  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlePageIsLoading);
  const view = useSelector(getArticlePageView);
  const isError = useSelector(getArticlePageIsError);

  const onLoadNextPart = useCallback(() => {
    dispatch(fetchNextArticlePage());
  }, [dispatch]);

  useInitialEffect(() => {
    dispatch(articlePageActions.initState());
    dispatch(
      fetchArticlesList({
        page: 1,
      })
    );
  });

  const onChangeView = useCallback(
    (newView: ArticleView) => {
      dispatch(articlePageActions.setView(newView));
    },
    [dispatch]
  );

  if (isError) {
    return <div className={classNames(cls.ArticlePage, {}, [className])}>Произошла ошибка при загрузке статей</div>;
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page onScrollEnd={onLoadNextPart} className={classNames(cls.ArticlePage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList isLoading={isLoading} view={view} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ArticlePage;
