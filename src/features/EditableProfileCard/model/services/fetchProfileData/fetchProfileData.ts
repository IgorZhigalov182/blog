import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';

export const fetchProfileData = createAsyncThunk<Profile, string | undefined, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
      if (!profileId) {
        throw new Error(`Absent profile id`);
      }

      const response = await extra.api.get<Profile>(`/profile/${profileId}`);
      console.log(`response: ${response}`);

      if (!response.data) {
        throw new Error();
      }

      return response.data;
    } catch (error) {
      return rejectWithValue('Неверный логин или пароль');
    }
  }
);
