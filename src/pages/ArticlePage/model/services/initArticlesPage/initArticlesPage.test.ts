import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('initArticlesPage.test', () => {
  test('Success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
      articlesPage: {
        ids: [],
        page: 2,
        hasMore: true,
        entities: {},
        limit: 5,
        isLoading: false,
        _inited: false,
      },
    });

    // await thunk.callThunk(fetchArticlesList({ page: 3 }));

    expect(thunk.dispatch).toBeCalledTimes(4);
  });
});
