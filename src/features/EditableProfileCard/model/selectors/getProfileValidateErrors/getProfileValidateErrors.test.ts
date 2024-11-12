import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { ValidateProfileError } from '../../contst/validateProfileError';

const data = {
  username: 'admin',
  age: 25,
  country: Country.Russia,
  firstname: 'Igor',
  lastname: 'Zhigalov',
  city: 'Saint-Petersburg',
  currency: Currency.RUB,
  avatar:
    'https://img01.rl0.ru/afisha/e1200x800i/daily.afisha.ru/uploads/images/b/1e/b1e50b3d4d29c03bda90bde2593ead14.jpeg',
};

describe('getProfileValidateErrors.test', () => {
  test('Should return profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: [ValidateProfileError.SERVER_ERROR, ValidateProfileError.INCORRECT_AGE],
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
      ValidateProfileError.INCORRECT_AGE,
    ]);
  });

  test('Empty profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
