import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { User } from '../types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { getUserDataByIdQuery } from '../../api/userApi';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (_, thunkApi) => {
    const { rejectWithValue, dispatch } = thunkApi;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY);

    if (!userId) {
      return rejectWithValue('No user data');
    }

    try {
      const response = await dispatch(
        getUserDataByIdQuery(JSON.parse(userId)),
      ).unwrap();

      if (!response.id) {
        return rejectWithValue('No json settings');
      }

      return response;
    } catch (error) {
      console.log(error);
      return rejectWithValue('');
    }
  },
);
