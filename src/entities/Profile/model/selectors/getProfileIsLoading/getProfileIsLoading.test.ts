import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { fireEvent, screen } from '@testing-library/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

const data = {
  username: 'admin',
  age: 25,
  country: Country.Russia,
  firstname: 'Igor',
  lastname: 'Zhigalov',
  city: 'Saint-Petersburg',
  currency: Currency.RUB,
  avatar:
    'https://img01.rl0.ru/afisha/e1200x800i/daily.afisha.ru/uploads/images/b/1e/b1e50b3d4d29c03bda90bde2593ead14.jpeg'
};

describe('getProfileIsLoading.test', () => {
  test('Should return profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true
      }
    };

    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test('Empty profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {}
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(undefined);
  });
});
