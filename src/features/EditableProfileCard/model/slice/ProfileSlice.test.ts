import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { profileActions, profileReducer } from './ProfileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfilePageSchema';
import { ValidateProfileError } from '../contst/validateProfileError';

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

describe('ProfileSlice.test', () => {
  test('setReadonly reducer', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };

    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true))).toEqual({
      readonly: true,
    });
  });

  test('cancelEdit reducer', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { ...data, username: '' },
    };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit())).toEqual({
      readonly: true,
      validateErrors: undefined,
    });
  });

  test('updateProfile reducer', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: '123' },
    };

    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({
          username: '123456',
        })
      )
    ).toEqual({
      form: { username: '123456' },
    });
  });

  test('test update profile service pending', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.NO_DATA],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending)).toEqual({
      isLoading: true,
      validateErrors: undefined,
    });
  });

  test('test update profile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '_'))).toEqual({
      isLoading: false,
      readonly: true,
      validateErrors: undefined,
      form: data,
      data,
    });
  });
});
