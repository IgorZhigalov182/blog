import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchNextArticlePage } from './fetchNextArticlePage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlePage.test', () => {
  test('Success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        ids: [],
        page: 2,
        hasMore: true,
        entities: {},
        limit: 5,
        isLoading: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalled();
  });

  test('fetchArticleList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        ids: [],
        page: 2,
        hasMore: false,
        entities: {},
        limit: 5,
        isLoading: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });

  test('fetchArticleList not called because isLoading is true', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlePage, {
      articlesPage: {
        ids: [],
        page: 2,
        hasMore: true,
        entities: {},
        limit: 5,
        isLoading: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalled();
  });
});
