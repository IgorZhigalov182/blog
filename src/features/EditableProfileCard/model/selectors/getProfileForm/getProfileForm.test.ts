import { StateSchema } from '@/app/providers/StoreProvider';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';

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

describe('getProfileForm.test', () => {
  test('Should return profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: data,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(data);
  });

  test('Empty profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });
});
