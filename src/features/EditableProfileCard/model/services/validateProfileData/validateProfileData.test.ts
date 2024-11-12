import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';
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
describe('validateProfileData.test', () => {
  test('Success', async () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('No data', async () => {
    const result = validateProfileData(undefined);

    expect(result).toEqual([ValidateProfileError.NO_DATA]);
  });

  test('No firstname or lastname', async () => {
    const result = validateProfileData({ ...data, firstname: undefined, lastname: 'Zhigalov' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('Incorrect age', async () => {
    const result = validateProfileData({ ...data, age: 0 });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('Incorrect country', async () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('Incorrect all', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY,
    ]);
  });
});
