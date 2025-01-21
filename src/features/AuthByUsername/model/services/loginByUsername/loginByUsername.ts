import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider/config/StateSchema';
import { User, userActions } from '@/entities/User';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.post<User>('/login', authData);

    if (!response.data) {
      throw new Error();
    }

    dispatch(userActions.setAuthData(response.data));

    if (extra.navigate) {
      extra.navigate('/profile');
    }

    return response.data;
  } catch (error) {
    return rejectWithValue('Неверный логин или пароль');
  }
});
