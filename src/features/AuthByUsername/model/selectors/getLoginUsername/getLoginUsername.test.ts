import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = { loginForm: { username: 'Igor' } };
    expect(getLoginUsername(state as StateSchema)).toEqual('Igor');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual('');
  });
});
