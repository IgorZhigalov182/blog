import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from './articleDetails';

describe('articleDetails', () => {
  test('should return data', () => {
    const data = {
      id: '1',
      title: 'title',
    };

    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    };
    expect(getArticleDetailsData(state as StateSchema)).toEqual(data);
  });

  test('is loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(true);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'Error',
      },
    };

    expect(getArticleDetailsData(state as StateSchema)).toEqual(undefined);
  });
});
