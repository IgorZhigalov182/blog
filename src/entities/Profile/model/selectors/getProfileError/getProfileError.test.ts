import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { fireEvent, screen } from '@testing-library/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

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

describe('getProfileError.test', () => {
  test('Should return profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'Error'
      }
    };
    expect(getProfileError(state as StateSchema)).toEqual('Error');
  });

  test('Empty profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {}
    };
    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
